import React from "react";

const ChatInputField = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="mt-auto align-items-end border-info d-lg-block py-3 px-4 border-top chat_input">
      <div className="input-group flex-fill">
        <input
          className="form-control"
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.code === "Enter" ? sendMessage() : null)}
          placeholder="Type your message..."
        />
        <button className="btn btn-info ">Send</button>
      </div>
    </div>
  );
};

export default ChatInputField;
