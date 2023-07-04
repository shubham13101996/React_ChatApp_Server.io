import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInputField from "./ChatInputField";
import ChatContainer from "./ChatContainer";

const Chat = ({ user, message, messages, setMessage }) => {
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <div className="position-relative chat-height overflow-auto">
        <div className="d-flex flex-column p-4">
          {messages.map((message, index) => {
            return message.type === "UserStatus" ? (
              <div key={index} className="text-center">
                <span className="badge bg-info ">
                  {message.userId === user.userId
                    ? "You have joined!!"
                    : `${message.username} has joined!!`}
                </span>
              </div>
            ) : null;
          })}
        </div>
      </div>
      <ChatInputField message={message} setMessage={setMessage} />
    </ChatContainer>
  );
};

export default Chat;
