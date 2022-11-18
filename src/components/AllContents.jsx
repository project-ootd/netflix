import React, { useEffect, useState } from "react";
import KoreanDrama from "../slides/KoreanDrama";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import RankingSlide from "./RankingSlide";
import SlideItems from "./SlideItems";
import TestVideo from "./TestVideo";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";
import axios from "axios";
import { BACKEND_URL } from "../utils";

const AllContents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ranking, setRanking] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const getRank = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/rank`,
        method: "GET",
      });
      console.log(data.data);
      setRanking(data.data);
    };
    getRank();
  }, []);

  return (
    <div className="App">
      <Header />
      <TestVideo />
      <RankingSlide openModal={openModal} ranking={ranking} />
      {/* <KoreanDrama /> */}
      <SlideItems />
      <Modal
        open={modalOpen}
        close={closeModal}
        ranking={ranking}
        header="Modal heading"
      />
      <Footer />
    </div>
  );
};

export default AllContents;
