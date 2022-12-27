import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import AllContents from "./components/AllContents";
import ChoiceProfile from "./components/ChoiceProfile";
import Login from "./components/Login";
import RegForm from "./components/RegForm";
import KakaoInfo from "./components/KakaoInfo";
import Search from "./components/Search";
import SlideItems from "./components/SlideItems";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Mylist from "./components/MyList";
import OriginalAudio from "./components/OriginalAudio";
import Player from "./components/Player";
import PopularContents from "./components/PopularContents";
import Movie from "./components/Movie";
import Series from "./components/Series";
import AuthRoute from "./auth/AuthRoute";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/genre/series" element={<Series />}></Route>
        <Route path="/latest" element={<PopularContents />}></Route>
        <Route path="/original-audio" element={<OriginalAudio />}></Route>
        <Route path="/browse/my-list" element={<Mylist />}></Route>
        <Route element={<AuthRoute />}>
          <Route path="/genre/movie" element={<Movie />}></Route>
          <Route path="/choiceprofile" element={<ChoiceProfile />}></Route>
          <Route path="/browse" element={<AllContents />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regform" element={<RegForm />}></Route>
        <Route path="/payinfo" element={<KakaoInfo />}></Route>
        <Route path="/search/:search" element={<Search />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/slideitems" element={<SlideItems />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/player" element={<Player />}></Route>

        {/* <Route path="/kakaopay" element={<Kakaopay />}></Route> */}
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  // </React.StrictMode>
);
