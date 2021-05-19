import React, { useState } from "react";
import Button from "@material-ui/core/Button/Button";
import { FaGoogle } from "react-icons/fa";
import firebase from "firebase/app";
import { auth } from "../firebase";
import { useAuthUser } from "../hooks/useAuthUser";
import { Flex } from "../Components/UI/shared";

export const GoogleLoginButton = () => {
  const { setAuthUser } = useAuthUser();
  const handleLogIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    auth
      .signInWithPopup(provider)
      .then(function (result: firebase.auth.UserCredential) {
        // This gives you a Google Access Token.
        if (!result.credential) return;
        // The signed-in user info.

        const user = result.user;
        if (!user) {
          alert("User is null");
        }

        if (user) {
          setAuthUser(user);
        }

        // Don't rely on this UI optimization to control
        //who can access your app, as client - side requests can
        //be modified.Be sure to validate that the returned ID token
        //shas an hd claim value that matches what you
        //expect(e.g.mycolledge.edu).Unlike the request parameter,
        //the ID token hd claim is contained within a security token from
        //  Google, so the value can be trusted.
      });
  };

  return (
    <>
      <Button
        style={{ background: "lightBlue", paddingRight: 10 }}
        onClick={() => {
          handleLogIn();
        }}
      >
        <Flex>
          <Flex width="2rem" justifyContent="center">
            <FaGoogle />
          </Flex>
          <div style={{ background: "clear" }}>Sign in with Google</div>
        </Flex>
      </Button>
    </>
  );
};
