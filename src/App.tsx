import React, { useEffect, useState } from "react";
import "./App.css";
import { GoogleLoginButton } from "./Components/UI/GoogleLoginButton";
import { auth } from "./firebase";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useAuthUser } from "./hooks/useAuthUser";
import { Flex, Container, CenterContainer, Menu } from "./Components/UI/shared";
import { LogoutButton } from "./Components/UI/LogoutButton";

function App() {
  const { authUser, isLoading } = useAuthUser();

  const projectTitle = "my-react-app-sample-google-login";

  return (
    <Container>
      {isLoading ? (
        <Flex fullHeight>
          <Box style={{ width: "100%" }}>
            <LinearProgress color="secondary" />
          </Box>
        </Flex>
      ) : !authUser ? (
        <Flex fullHeight>
          <CenterContainer>
            <div
              style={{
                height: "5rem",
                textAlign: "center",
              }}
            >
              {projectTitle}
            </div>
            <GoogleLoginButton />
          </CenterContainer>
        </Flex>
      ) : (
        <Menu>
          <div>{projectTitle}</div>
          <LogoutButton
            handleLogout={() => {
              auth.signOut();
            }}
          />
        </Menu>
      )}
    </Container>
  );
}

export default App;
