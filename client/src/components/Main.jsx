import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import NewUser from "./NewUser";

const Main = ({ socket }) => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("session", ({ userId, username }) => {
      setUser(username);
    });
  }, [socket]);

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
        {user && <Chat user={user} message={message} setMessage={setMessage} />}
        {!user && (
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
