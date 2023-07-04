import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import NewUser from "./components/NewUser";
// import { io } from "socket.io-client";

const App = () => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");

  const logNewUser = () => {
    setUser(newUser);
  };
  return (
    <main className="content">
      <div className="container mt-3">
        {user && (
          <div className="card w-100">
            <div className="row">
              <div className="col-12 col-lg-12 col-xl-12">
                <div className="py-2 px-4 w-100 border-bottom d-lg-block sticky-top bg-white">
                  <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                      <img
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                        className="rounded-circle mx-2"
                        alt="avatar"
                        width="40"
                        height="40"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <strong>Logged in as {user}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default App;
