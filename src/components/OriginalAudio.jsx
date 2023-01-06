import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BACKEND_URL } from "../utils";
import "../styles/OriginalAudio.css";
import OriginalAudioList from "./OriginalAudioList";
import { useRecoilState } from "recoil";
import { rankingState } from "../recoil/ranking";

const OriginalAudio = () => {
  const [originalcon, setOriginalCon] = useState([]);
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

  useEffect(() => {
    const getOrigin = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/origin`,
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setOriginalCon(data.data);
    };
    getOrigin();
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
    <div className="original-Header">
      <div className="original-box">
        <div className="original-con">
          <div className="original-box-text">
            <div className="title-text">언어별로 찾아보기</div>
            <div className="language-con">
              <div className="preference-Language">
                선호하는 설정을 선택해주세요{" "}
              </div>
              <div className="native-language-box">
                <div className="native-language">
                  <select name="language" id="language">
                    <option value="원어">원어</option>
                    <option value="자막">자막</option>
                    <option value="더빙">더빙</option>
                  </select>
                  <select
                    name="language"
                    id="language"
                    className="choice-language"
                  >
                    <option value="영어">영어</option>
                    <option value="일본어">일본어</option>
                    <option value="아랍어">아랍어</option>
                    <option value="인도네시아어">인도네시아어</option>
                  </select>
                  <div className="sort-by">정렬 기준</div>
                  <select
                    name="language"
                    id="language"
                    className="choice-menual"
                  >
                    <option value="추천 컨텐츠">추천 컨텐츠</option>
                    <option value="출시일순">출시일순</option>
                    <option value="오름차순(ㄱ ~ Z)">오름차순(ㄱ ~ Z)</option>
                    <option value="내림차순(Z ~ ㄱ)">내림차순(Z ~ ㄱ)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OriginalAudioList
          openModal={openModal}
          setZindex={setZindex}
          check={check}
          setCheck={setCheck}
          originalcon={originalcon}
        />
      </div>
    </div>
  );
};

export default OriginalAudio;
