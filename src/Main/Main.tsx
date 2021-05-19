import React from "react";
import { LogoutButton } from "../Login/LogoutButton";
import { Menu } from "../Components/UI/shared";
import { PROJECT_TITLE } from "../Constants";
import { auth } from "../firebase";

export const Main = () => {
  return (
    <Menu>
      <div>{PROJECT_TITLE}</div>
      <LogoutButton
        handleLogout={() => {
          auth.signOut();
        }}
      />
    </Menu>
  );
};
