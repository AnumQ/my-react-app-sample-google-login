import React from "react";
import { GoogleLoginButton } from "./GoogleLoginButton";
import { Flex, CenterContainer } from "../Components/UI/shared";
import { PROJECT_TITLE } from "../Constants";

export const LoginView = () => {
  return (
    <Flex fullHeight>
      <CenterContainer>
        <div
          style={{
            height: "5rem",
            textAlign: "center",
          }}
        >
          {PROJECT_TITLE}
        </div>
        <GoogleLoginButton />
      </CenterContainer>
    </Flex>
  );
};
