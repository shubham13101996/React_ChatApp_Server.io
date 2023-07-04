import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInputField from "./ChatInputField";
import ChatContainer from "./ChatContainer";
import ScrollableFeed from "react-scrollable-feed";
const Chat = ({ user, message, setMessage, messages, sendMessage }) => {
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <div className="position-relative chat-height overflow-auto">
        <ScrollableFeed>
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
              ) : (
                <div
                  key={index}
                  className={
                    message.userId === user.userId
                      ? "chat_message_right pb-4"
                      : "chat_message_left pb-4"
                  }
                >
                  <div className="">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-HD-Image.png"
                      alt={message.username}
                      title={message.username}
                      width="40"
                      height="40"
                      className="rounded-circle mr-1"
                    />
                    <div className="text-muted small text-nowrap mt-2">
                      12:00 AM
                    </div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="fw-bold  mb-1">
                      {message.userId === user.userId
                        ? "You"
                        : message.username}
                    </div>
                    {message.message}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollableFeed>
      </div>
      <ChatInputField
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </ChatContainer>
  );
};

export default Chat;
