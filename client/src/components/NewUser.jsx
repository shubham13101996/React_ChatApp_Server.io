import React from "react";

const NewUser = ({ newUser, logNewUser, setNewUser }) => {
  return (
    <div className="card w-full text-center border-white">
      <div className="row">
        <div className="col-12">
          <h5>Enter Username</h5>
        </div>
        <div className="d-flex justify-content-center py-2">
          <div className="col-4">
            <input
              type="text"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              placeholder="username"
              name="username"
              className="form-control mb-3"
              autoComplete="off"
              onKeyPress={(e) => (e.code === "Enter" ? logNewUser() : null)}
            />
            <button
              className="btn btn-success w-100"
              onClick={() => logNewUser()}
            >
              {" "}
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
