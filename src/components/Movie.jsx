import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import TestVideo from "./TestVideo";
import { BACKEND_URL } from "../utils";
import { rankingState } from "../recoil/ranking";
import Modal from "./Modal";
import Footer from "./Footer";
import MovieSub from "./MovieSub";
import "../styles/Movie.css";
import Layout from "./Layout";
const Movie = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [currentContent, setCurrentContent] = useState({});
  const [allContents, setAllContents] = useState([]);
  const [kDramas, setKDramas] = useState([]);
  const [check, setCheck] = useState([]);
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
      setAllContents(data.data);
    };
    getContent();
  }, []);
  return (
    <Layout>
      <div className="movie-head">
        <div className="movie-head-con">
          <div className="movie-page-text">영화</div>
          <select name="genre" id="genre" className="choice-genre">
            <option value="장르">장르</option>
            <option value="한국">한국</option>
            <option value="미국 영화">미국 영화</option>
            <option value="일본 영화">일본 영화</option>
            <option value="영국 영화">영국 영화</option>
            <option value="코미디">코미디</option>
            <option value="판타지">판타지</option>
          </select>
        </div>
        <TestVideo openModal={openModal} allContents={ranking[2]} />
        <MovieSub openModal={openModal} kDramas={kDramas} check={check} />
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

export default Movie;
