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
import { authenticationState } from "../recoil/store";

const ChoiceProfile = () => {
  const [user, setUser] = useRecoilState(userState);
  const [useremail, setUseremail] = useState("");
  const [paymentChk, setPaymentChk] = useState(false);
  const [ChoiceProfile, setChoiceProfile] = useState({});

  const date = new Date();
  const day = Moment().format("yyyy-MM-DD");

  useEffect(() => {
    const getProfile = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/getProfile`,
        method: "GET",
        params: {
          useremail: sessionStorage.getItem("email"),
        },
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setChoiceProfile(data.data);
    };
    getProfile();

    const getOrder = async () => {
      try {
        const data = await axios({
          url: `${BACKEND_URL}/getorder`,
          method: "POST",
          data: {
            useremail: sessionStorage.getItem("email"),
          },
          headers: {
            Authorization: sessionStorage.getItem("userToken"),
          },
        });
      } catch (e) {
        console.log(e);
      }
    };

    getOrder();

    const lastDate = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/getLastPayDate`,
        method: "POST",
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
        data: {
          useremail: sessionStorage.getItem("email"),
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
        url: `${BACKEND_URL}/order`,
        method: "POST",
        data: {
          useremail: sessionStorage.getItem("email"),
          orderDate: date,
        },
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
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
            {ChoiceProfile.profileNameList?.map((profile, index) => {
              return (
                <li className="profile" key={index}>
                  <div>
                    <a
                      href="/browse"
                      className="profile-text"
                      onClick={() => {
                        sessionStorage.setItem("profile", index);
                      }}
                    >
                      <div className="avatar-wrapper">
                        <img
                          src={profile?.img}
                          alt=""
                          className="profile-icon"
                        />
                      </div>
                      <span style={{ marginTop: "4vw" }}>
                        {profile?.nickname}
                      </span>
                    </a>
                    <div className="profile-children"></div>
                  </div>
                </li>
              );
            })}
          </ul>
          <span className="profile-button">
            <a
              href="/profile"
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
