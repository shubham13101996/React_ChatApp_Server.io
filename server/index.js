import { createServer } from "http";
import { Server } from "socket.io";

import { v4 as uuidV4 } from "uuid";
import dotenv from "dotenv";
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
  socket.emit("session", {
    userId: socket.userId,
    username: socket.username,
  });
});

console.log("server is listening successfully on port", process.env.PORT);
httpServer.listen(process.env.PORT || 4000);
