import React, { useState } from "react";
import "../styles/ChoiceProfile.css";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";
import { useEffect } from "react";
import { BACKEND_URL } from "../utils";
import axios from "axios";
import Moment from "moment";
import "moment/locale/ko"; // Locale Setting
import { useLocation } from "react-router-dom";

const ChoiceProfile = () => {
  const [user, setUser] = useRecoilState(userState);
  const [paymentChk, setPaymentChk] = useState(false);

  const date = new Date();
  const day = Moment().format("yyyy-MM-DD HH:mm:ss");

  useEffect(() => {
    const getOrder = async () => {
      try {
        const data = await axios({
          url: "http://localhost:8084/getorder",
          method: "POST",
          data: {
            useremail: user.useremail,
          },
        });
      } catch (e) {
        console.log(e);
        console.log("실행 안됨!!!");
      }
    };

    getOrder();

    const lastDate = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/user/getLastPayDate`,
        method: "POST",
        data: {
          useremail: user.useremail,
        },
      });

      // user테이블에 lastDate 값이 존재하면 주문이 안 되어야함
      // user.lastDate == ture => order 실행 X
      // paymentChk == ture => ! order();
      if (data.data.lastPaymentDate == null) {
        setOrder();
      }
    };

    lastDate();

    const setOrder = async () => {
      const data = await axios({
        url: "http://localhost:8084/order",
        method: "POST",
        data: {
          useremail: user.useremail,
          orderDate: date,
        },
      });
    };
  }, []);

  return (
    <div className="choice-head">
      <div className="pinning-head">
        <div className="pinning-con"></div>
      </div>
      <div className="profile-gate-con">
        <div className="list-profile">
          <h1
            style={{
              color: "#fff",
              fontSize: "3.5vw",
              fontWeight: "unset",
              width: "100%",
              top: "-50px",
            }}
          >
            넷플릭스를 시청할 프로필을 선택해주세요
          </h1>
          <ul className="choice-profile">
            <li className="profile">
              <div>
                <a href="/allcontents" className="profile-text">
                  <div className="avatar-wrapper">
                    <img
                      src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                      alt=""
                      className="profile-icon"
                    />
                  </div>
                  <span style={{ marginTop: "4vw" }}>profile1</span>
                </a>
                <div className="profile-children"></div>
              </div>
            </li>
            <li className="profile">
              <div>
                <a href="/allcontents" className="profile-text">
                  <div className="avatar-wrapper">
                    <img
                      src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                      alt=""
                      className="profile-icon"
                    />
                  </div>
                  <span>profile2</span>
                </a>
              </div>
            </li>
            <li className="profile">
              <div>
                <a href="/allcontents" className="profile-text">
                  <div className="avratar-wrapper">
                    <img
                      src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTpGJ10BG0ND_0g7-9qiFb9bvXgAtmEXEfmRY7XjMqB3axaO9e4eIxTxQzIbQYOW46KHMQgaGUmhkXQdt4jDovDpVe_DBCJI1NXX.png?r=438"
                      alt=""
                      className="profile-icon"
                    />
                  </div>
                  <span>profile3</span>
                </a>
              </div>
            </li>
            <li className="profile">
              <div>
                <a href="/allcontents" className="profile-text">
                  <div className="avratar-wrapper">
                    <img
                      src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVrwTVUu0vi8TrkRGVeBGYVORH9qG1D6nXpX9cMWJp71hXVzawvt73UKs76KXcn_bEj41nibhNDQ_24hOcVfQ7swug6DZcLWuR-N.png?r=59d"
                      alt=""
                      className="profile-icon"
                    />
                  </div>
                  <span>profile4</span>
                </a>
              </div>
            </li>
            <li className="profile">
              <div>
                <a href="/allcontents" className="profile-text">
                  <div className="avratar-wrapper">
                    <img
                      src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRZ9UvLLN8tmuXW65YweIeYLuhKgR4qnSL0rVwNF6rgxxbsMoW9mCtlxPcz76Ti7bnciG7lE4WcqR8Z7YVM4xjX_-r0wd449rgnY.png?r=acf"
                      alt=""
                      className="profile-icon"
                    />
                  </div>
                  <span>키즈</span>
                </a>
              </div>
            </li>
          </ul>
          <span className="profile-button">
            <a
              href="/"
              className="profile-button profile-text"
              style={{ border: "1px solid grey", width: "10%" }}
            >
              프로필 관리
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChoiceProfile;
