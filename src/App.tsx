import React, { useEffect, useState } from "react";
import "./App.css";
import { useAuthUser } from "./hooks/useAuthUser";
import { Container } from "./Components/UI/shared";
import { LoadingView } from "./Components/UI/LoadingView";
import { LoginView } from "./Login/LoginView";
import { Main } from "./Main/Main";

function App() {
  const { authUser, isLoading } = useAuthUser();

  return (
    <Container>
      {isLoading ? <LoadingView /> : !authUser ? <LoginView /> : <Main />}
    </Container>
  );
}

export default App;
