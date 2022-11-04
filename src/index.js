import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AllContents from "./components/AllContents";
import ChoiceProfile from "./components/ChoiceProfile";
import First from "./components/First";
import Login from "./components/Login";
import RegForm from "./components/RegForm";
import { RecoilRoot } from "recoil";
import KakaoInfo from "./components/KakaoInfo";
// import Kakaopay from "./components/Kakaopay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/choiceprofile" element={<ChoiceProfile />}></Route>
        <Route path="/allcontents" element={<AllContents />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regform" element={<RegForm />}></Route>
        <Route path="/payinfo" element={<KakaoInfo />}></Route>
        {/* <Route path="/kakaopay" element={<Kakaopay />}></Route> */}
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  // </React.StrictMode>
);
