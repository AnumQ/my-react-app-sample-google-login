import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import { log } from "../consoleHelper";
import { auth } from "../firebase";
import { useLoading } from "./useLoading";

export const useAuthUser = () => {
  const [authUser, setAuthUser] = useState<firebase.User | null | undefined>(
    null
  );

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // log("useAuthUser: " + authUser);
      setAuthUser(authUser);
      setIsLoading(false);
    });
  }, []);

  return { authUser, setAuthUser, isLoading };
};
