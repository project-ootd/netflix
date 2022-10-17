import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import First from "./components/First";
import Login from "./components/Login";
import RegForm from "./components/RegForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/first" element={<First />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/regform" element={<RegForm />}></Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
