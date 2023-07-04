import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInputField from "./ChatInputField";
import ChatContainer from "./ChatContainer";

const Chat = ({ user, message, setMessage }) => {
  return (
    <ChatContainer>
      {/* chat header  */}
      <ChatHeader user={user} />
      {/* chat input field  */}
      <ChatInputField message={message} setMessage={setMessage} />
    </ChatContainer>
  );
};

export default Chat;
