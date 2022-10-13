import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import First from "./components/First";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/first" element={<First />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
      {/* <Route path="*" element={<NotFound />}></Route> */}
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
