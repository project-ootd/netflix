import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../utils";
import "../styles/MyList.css";
import Footer from "./Footer";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { rankingState } from "../recoil/ranking";
import MyListContents from "./MyListContents";

const Mylist = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [contents, setContents] = useState([]);
  const [currentContent, setCurrentContent] = useState({});
  const [check, setCheck] = useState([]);
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [zIndex, setZindex] = useState(false);
  const onContents = (data) => {
    setContents(data);
  };
  const openModal = (content) => {
    setModalOpen(true);
    setCurrentContent(content);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* likeState 값 불러오기 */
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
  /** likelist안의 컨텐츠 가져오기 */
  useEffect(() => {
    const getData = async () => {
      const email = sessionStorage.getItem("email");
      const data = await axios({
        url: `${BACKEND_URL}/browse/my-list`,
        method: "get",
        params: {
          useremail: email,
        },
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      onContents(data.data);
    };
    getData();
  }, []);
  // console.log(contents);
  return (
    <div>
      <div className="my-list-box">
        <div className="my-list-header-text">
          <div className="title-text">내가 찜한 컨텐츠</div>
        </div>
        <MyListContents
          openModal={openModal}
          setZindex={setZindex}
          check={check}
          setCheck={setCheck}
          contents={contents}
        />
      </div>
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

export default Mylist;
