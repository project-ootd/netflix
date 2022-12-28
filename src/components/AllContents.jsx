import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Modal from "./Modal";
import RankingSlide from "./RankingSlide";
import SlideItems from "./SlideItems";
import TestVideo from "./TestVideo";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { useRecoilState } from "recoil";
import { rankingState } from "../recoil/ranking";
import Layout from "./Layout";

const AllContents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({});
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [allContents, setAllContents] = useState([]);
  const [kDramas, setKDramas] = useState([]);
  const [check, setCheck] = useState([]);

  const openModal = (content) => {
    setModalOpen(true);
    setCurrentContent(content);
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
    <Layout>
      <div className="App">
        <TestVideo openModal={openModal} allContents={ranking[0]} />
        <RankingSlide
          openModal={openModal}
          ranking={ranking}
          allContents={allContents}
          check={check}
        />
        <SlideItems
          openModal={openModal}
          kDramas={kDramas}
          check={check}
          ranking={ranking}
        />
        <Modal
          open={modalOpen}
          close={closeModal}
          header="Modal heading"
          currentContent={currentContent}
          check={check}
        />
        <Footer />
      </div>
    </Layout>
  );
};

export default AllContents;
