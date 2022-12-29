import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BACKEND_URL } from "../utils";
import "../styles/OriginalAudio.css";

const OriginalAudio = () => {
  const [originalcon, setOriginalCon] = useState([]);

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
      console.log("Origin data : ", originalcon);
    };
    getOrigin();
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

        {originalcon.map((originalcon, index) => {
          return (
            <div className="search-container" key={index}>
              <div className="search-result">
                <div className="search-thumbnail" key={originalcon.id}>
                  <a href="#">
                    <img
                      className="search-thumbnail-img"
                      src={originalcon?.contentImg}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OriginalAudio;
