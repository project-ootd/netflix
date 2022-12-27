import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Login from "../components/Login";
import { authenticationState } from "../recoil/store";

const AuthRoute = () => {
  const location = useLocation();
  const authenticated = useRecoilValue(authenticationState);

  useEffect(() => {
    console.log("토큰", sessionStorage.getItem("userToken"));
    // if(sessionStorage.getItem("userToken"))
  }, []);

  return authenticated ? <Outlet /> : <Login />;
};

export default AuthRoute;
