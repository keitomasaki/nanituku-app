import React, { createContext, useState, useEffect, useContext } from 'react';
import { SnackBarContext } from './SnackBarContextProvider';
import { listenAuthState } from '../firebase/auth';
import { getUserData } from '../firebase/fireStoreGet';
import { signIn } from '../firebase/signIn';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const { children } = props;
  const { openSnackBar } = useContext(SnackBarContext);
  const [state, setState] = useState({});

  const setData = (data) => {
    setState(data);
  };

  const signInFunc = async (email, password, history) => {
    const user = await signIn(email, password, openSnackBar);
    if (user) {
      const uid = user.user.uid;
      const getData = await getUserData(uid);
      console.log(getData);
      setState(getData);
      history.push('./');
    }
  };

  const confirmData = () => {
    console.log(state);
  };

  const provide = {
    setData,
    confirmData,
    signInFunc,
  };

  return (
    <AuthContext.Provider value={provide}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
