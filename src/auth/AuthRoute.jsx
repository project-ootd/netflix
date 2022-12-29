import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Login from "../components/Login";
import { authenticationState } from "../recoil/store";

const AuthRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const authenticated = useRecoilValue(authenticationState);

  useEffect(() => {
    if (sessionStorage.getItem("userToken") == null) {
      navigate(`/login`);
    } else {
      return;
    }
  }, []);

  return authenticated ? <Outlet /> : navigate(`/login`);
};

export default AuthRoute;
