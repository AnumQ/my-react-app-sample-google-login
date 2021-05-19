import React, { useEffect, useState } from "react";
import "./App.css";
import { GoogleLoginButton } from "./GoogleLoginButton";
import styled from "styled-components";
import { auth } from "./firebase";
import firebase from "firebase/app";
import Button from "@material-ui/core/Button/Button";
import { log } from "./consoleHelper";
import { useLoading } from "./hooks/useLoading";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useAuthUser } from "./hooks/useAuthUser";

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
  const { authUser, isLoading } = useAuthUser();

  const LogOutButton = () => {
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </Button>
    );
  };
  return (
    <div className="App">
      <div>SMILE :)</div>
      <div></div>
      <div>
        <span>Project: </span>my-react-app-sample-google-login
      </div>

      <LoginContainer>
        {isLoading ? (
          <Box style={{ width: "50%" }}>
            <LinearProgress color="secondary" />
          </Box>
        ) : !authUser ? (
          <GoogleLoginButton />
        ) : (
          <LogOutButton />
        )}
      </LoginContainer>
    </div>
  );
}

export default App;
