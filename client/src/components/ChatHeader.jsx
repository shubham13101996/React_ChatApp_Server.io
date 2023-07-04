import React from "react";

const ChatHeader = ({ user }) => {
  return (
    <div className=" align-items-start py-2 px-4 w-100 border-bottom border-info d-lg-block sticky-top bg-white">
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
  );
};

export default ChatHeader;
