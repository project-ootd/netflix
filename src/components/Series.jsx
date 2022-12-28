import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import TestVideo from "./TestVideo";
import { BACKEND_URL } from "../utils";
import { rankingState } from "../recoil/ranking";
import Modal from "./Modal";
import Footer from "./Footer";
import "../styles/Movie.css";
import SeriesSub from "./SeriesSub";
import Layout from "./Layout";
import FindMovie from "./FindMovie";
import MovieSub from "./MovieSub";

const Series = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [currentContent, setCurrentContent] = useState({});
  const [allContents, setAllContents] = useState([]);
  const [kDramas, setKDramas] = useState([]);
  const [check, setCheck] = useState([]);

  const [viewToggle, setViewToggle] = useState(false);

  const openModal = (content) => {
    setModalOpen(true);
    setCurrentContent(content);
    console.log(content);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const getRank = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/rank`,
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setRanking(data.data);
    };
    getRank();

    const getContent = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/allcontent`,
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      // console.log("data : " + data.data);
      setAllContents(data.data);
    };
    getContent();
  }, []);

  const getmovie = async (e) => {
    const data = await axios({
      url: `${BACKEND_URL}/movieSeries`,
      method: "POST",
      params: {
        keyword: e,
      },
    });
    setKDramas(data.data);

    if (e === "장르") {
      setViewToggle(false);
    } else {
      setViewToggle(true);
    }
  };

  return (
    <Layout>
      <div className="movie-head">
        <div className="movie-head-con">
          <div className="movie-page-text">시리즈</div>
          <select
            name="genre"
            id="genre"
            className="choice-genre"
            onChange={(e) => {
              getmovie(e.target.value);
            }}
          >
            <option value="장르">장르</option>
            <option value="한국">한국</option>
            <option value="미국">미국</option>
            <option value="일본">일본</option>
            <option value="코미디">코미디</option>
            <option value="판타지">판타지</option>
          </select>
        </div>
        <TestVideo openModal={openModal} allContents={allContents[55]} />
        {viewToggle ? (
          <FindMovie kDramas={kDramas} openModal={openModal} check={check} />
        ) : (
          <MovieSub openModal={openModal} check={check} />
        )}
        <Modal
          open={modalOpen}
          close={closeModal}
          ranking={ranking}
          header="Modal heading"
          currentContent={currentContent}
          check={check}
        />
        <Footer />
      </div>
    </Layout>
  );
};

export default Series;
