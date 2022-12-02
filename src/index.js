import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import AllContents from "./components/AllContents";
import ChoiceProfile from "./components/ChoiceProfile";
import Login from "./components/Login";
import RegForm from "./components/RegForm";
import { RecoilRoot } from "recoil";
import KakaoInfo from "./components/KakaoInfo";
import Search from "./components/Search";
import SlideItems from "./components/SlideItems";
import Header from "./components/Header";
import Mylist from "./components/MyList";

// import Kakaopay from "./components/Kakaopay";

// const root = ReactDOM.createRoot(document.getElementById("root"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/browse/my-list" element={<Mylist />}></Route>
        <Route path="/choiceprofile" element={<ChoiceProfile />}></Route>
        <Route path="/browse" element={<AllContents />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regform" element={<RegForm />}></Route>
        <Route path="/payinfo" element={<KakaoInfo />}></Route>
        <Route path="/search/:search" element={<Search />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/slideitems" element={<SlideItems />}></Route>

        {/* <Route path="/kakaopay" element={<Kakaopay />}></Route> */}
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  // </React.StrictMode>
);
