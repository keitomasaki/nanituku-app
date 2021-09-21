import React, { useEffect, useState } from "react";
import { listenAuthState } from "./firebase/auth";
import { useHistory } from "react-router-dom";

const Auth = (props) => {
  const { children } = props;
  const history = useHistory();
  const [isDisplay, setIsDisplay] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const listenAuthStateWrapper = async () => {
    const user = await listenAuthState();
    if (user) {
      setIsDisplay(true);
    } else {
      setIsDisplay(true);
      history.push("/signIn");
    }
  };

  useEffect(() => {
    listenAuthStateWrapper();
  }, []);
  return <>{isDisplay && children}</>;
};

export default Auth;
