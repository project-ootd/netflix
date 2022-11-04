import React, { useState } from "react";
import KoreanDrama from "../slides/KoreanDrama";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import RankingSlide from "./RankingSlide";
import TestVideo from "./TestVideo";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";

const AllContents = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <Header />
      <TestVideo />
      <RankingSlide openModal={openModal} />
      <KoreanDrama />
      <Modal open={modalOpen} close={closeModal} header="Modal heading" />
      <Footer />
    </div>
  );
};

export default AllContents;
