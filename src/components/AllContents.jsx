import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Modal from "./Modal";
import RankingSlide from "./RankingSlide";
import SlideItems from "./SlideItems";
import TestVideo from "./TestVideo";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { useRef } from "react";

const AllContents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [currentContent, setCurrentContent] = useState({});
  const [allContents, setAllContents] = useState([]);
  const [kDramas, setKDramas] = useState([]);
  const [check, setCheck] = useState([]);

  console.log("user : ", sessionStorage.getItem("email"));
  // const targetRef = useRef(null);

  // const handleScroll = () => {
  //   if (window.screenY > 0) {
  //     targetRef.current.style.background = "red";
  //   }
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       clearInterval(timer);
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   });
  // }, []);

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
      });
      setRanking(data.data);
      console.log("data", data.data);
    };
    getRank();

    const getContent = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/allcontent`,
        method: "GET",
      });
      // console.log("data : " + data.data);
      setAllContents(data.data);
    };
    getContent();

    const getKDrama = async () => {
      const data = await axios(`${BACKEND_URL}/contents?kw=DRAMA`);
      setKDramas(kDramas.data);
      console.log("dramas data : ", data.data);
    };
    getKDrama();

    // const getContent = async () => {
    //   const data = await axios({
    //     url: `${BACKEND_URL}/allcontent`,
    //     method: "GET",
    //   });
    //   console.log("data : " + data.data);
    //   setAllContents(data.data);
    // };
    // getContent();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/browse/my-list/check`,
        method: "GET",
        params: {
          useremail: sessionStorage.getItem("email"),
        },
      });
      setCheck(data.data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <TestVideo openModal={openModal} allContents={ranking[0]} />
      <RankingSlide
        openModal={openModal}
        ranking={ranking}
        allContents={allContents}
        check={check}
      />
      <SlideItems openModal={openModal} kDramas={kDramas} />
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
  );
};

export default AllContents;
