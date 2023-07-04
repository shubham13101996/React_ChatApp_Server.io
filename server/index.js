import { createServer } from "http";
import { Server } from "socket.io";

import { v4 as uuidV4 } from "uuid";
import dotenv from "dotenv";
import { connected } from "process";
dotenv.config();
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("Invalid username"));
  }
  (socket.username = username), (socket.userId = uuidV4());
  next();
});

io.on("connection", async (socket) => {
  // all conected users
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userId: socket.userId,
      username: socket.username,
    });
  }
  // all users event
  socket.emit("users", users);

  // connected user details event
  socket.emit("session", {
    userId: socket.userId,
    username: socket.username,
  });

  // new user event
  socket.broadcast.emit("user connected", {
    userId: socket.userId,
    username: socket.username,
  });
});

console.log("server is listening successfully on port", process.env.PORT);
httpServer.listen(process.env.PORT || 4000);
