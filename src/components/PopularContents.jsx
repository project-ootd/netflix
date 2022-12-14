import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import RankingSlide from "./RankingSlide";

import { rankingState } from "../recoil/ranking";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import Modal from "./Modal";
import Footer from "./Footer";
import Latets from "./Latets";

const PopularContents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [currentContent, setCurrentContent] = useState({});
  const [allContents, setAllContents] = useState([]);
  const [kDramas, setKDramas] = useState([]);
  const [check, setCheck] = useState([]);
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

    const getKDrama = async () => {
      const data = await axios(`${BACKEND_URL}/contents?kw=DRAMA`);
      setKDramas(kDramas.data);
    };
    getKDrama();
  }, []);
  const openModal = (content) => {
    setModalOpen(true);
    setCurrentContent(content);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/browse/my-list/check`,
        method: "GET",
        params: {
          useremail: sessionStorage.getItem("email"),
        },
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setCheck(data.data);
    };
    getData();
  }, []);
  return (
    <div className="popular-Header">
      <Latets
        openModal={openModal}
        kDramas={kDramas}
        check={check}
        setCheck={setCheck}
      />
      <Modal
        open={modalOpen}
        close={closeModal}
        ranking={ranking}
        header="Modal heading"
        currentContent={currentContent}
        check={check}
        setCheck={setCheck}
      />
      <Footer />
    </div>
  );
};

export default PopularContents;
