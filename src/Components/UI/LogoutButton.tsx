import React from "react";
import Button from "@material-ui/core/Button/Button";

export const LogoutButton = ({ handleLogout }: { handleLogout: any }) => {
  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Log out
    </Button>
  );
};
