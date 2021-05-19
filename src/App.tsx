import React, { useEffect, useState } from "react";
import "./App.css";
import { GoogleLoginButton } from "./GoogleLoginButton";
import styled from "styled-components";
import { auth } from "./firebase";
import firebase from "firebase/app";
import Button from "@material-ui/core/Button/Button";
import { log } from "./consoleHelper";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useAuthUser } from "./hooks/useAuthUser";
import { FlexRow, Flex } from "./Components/UI/shared";

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

const Container = styled.div`
  background-color: clear;
  height: 100%;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding-top: 1rem;
`;

function App() {
  const { authUser, isLoading } = useAuthUser();

  const projectTitle = "my-react-app-sample-google-login";
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
    <Container>
      {isLoading ? (
        <Flex style={{ height: "100vh" }}>
          <Box style={{ width: "100%" }}>
            <LinearProgress color="secondary" />
          </Box>
        </Flex>
      ) : !authUser ? (
        <LoginContainer>
          <div style={{ height: "5rem" }}>{projectTitle}</div>
          <GoogleLoginButton />
        </LoginContainer>
      ) : (
        <FlexRow justifyContent="space-between" alignItems="center">
          <div>{projectTitle}</div>
          <LogOutButton />
        </FlexRow>
      )}
    </Container>
  );
}

export default App;
