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
      });
      setOriginalCon(data.data);
      console.log("Origin data : ", originalcon);
    };
    getOrigin();
  }, []);

  return (
    <div className="original-Header">
      <div className="original-box">
        <div className="original-box-text">
          <div className="title-text">언어별로 찾아보기</div>
        </div>
        {originalcon.map((originalcon, index) => {
          return (
            <div className="search-container">
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
