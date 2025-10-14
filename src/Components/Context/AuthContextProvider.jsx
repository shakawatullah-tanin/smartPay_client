import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [paid, setPaid] = useState([]);

  const [loading, setLoding] = useState(true);

  const [balance, setBalance] = useState(10000);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoding(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const UsersignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoding(true);
      console.log(loading);

      if (currentUser) {
        setUser(currentUser);

        setLoding(false);
      } else {
        setUser(null);
        setLoding(false);
      }
    });

    return () => unsubscribe();
  }, [loading, user]);

  const userInfo = {
    createUser,
    signIn,
    paid,
    setPaid,
    user,
    loading,
    balance,
    setBalance,
    UsersignOut,
    setLoding,
    setUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthContextProvider;
