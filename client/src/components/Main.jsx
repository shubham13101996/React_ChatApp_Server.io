import React, { useState } from "react";
import Chat from "./Chat";
import NewUser from "./NewUser";

const Main = () => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const logNewUser = () => {
    setUser(newUser);
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
