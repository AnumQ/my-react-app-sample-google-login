import React, { useState } from "react";
import "./App.css";
import { FaGoogle } from "react-icons/fa";
import { GoogleLoginButton as GoogleLoginButton } from "./GoogleLoginButton";
import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: "#ffffff";
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(0, 0, 0);
`;
function App() {
  return (
    <div className="App">
      <div>SMILE :)</div>
      <div></div>
      <div>
        <span>Project: </span>my-react-app-sample-google-login
      </div>
      <LoginContainer>
        <GoogleLoginButton />
      </LoginContainer>
    </div>
  );
}

export default App;
