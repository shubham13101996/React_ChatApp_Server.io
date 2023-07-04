import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Main from "./components/Main";
import { io } from "socket.io-client";

const socket = io("http://localhost:4001");

const App = () => {
  return <Main socket={socket} />;
};

export default App;
