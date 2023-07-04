import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import NewUser from "./NewUser";

const Main = ({ socket }) => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("users", (users) => {
      // console.log(users);
      const messagesArr = [];
      for (const { userId, username } of users) {
        const newMessages = {
          type: "UserStatus",
          userId,
          username,
        };
        messagesArr.push(newMessages);
      }
      setMessages([...messages, ...messagesArr]);
      setUsers(users);
    });
    socket.on("session", ({ userId, username }) => {
      setUser({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessages = {
        type: "UserStatus",
        userId,
        username,
      };
      setMessages([...messages, newMessages]);
    });
  }, [socket, messages]);

  const logNewUser = () => {
    setUser(newUser);
    socket.auth = {
      username: newUser,
    };
    socket.connect();
  };
  return (
    <main className="content">
      <div className="container mt-3">
        {user.userId && (
          <Chat
            user={user}
            messages={messages}
            message={message}
            setMessage={setMessage}
          />
        )}
        {!user.userId && (
          <NewUser
            newUser={newUser}
            setNewUser={setNewUser}
            logNewUser={logNewUser}
          />
        )}
      </div>
    </main>
  );
};

export default Main;
