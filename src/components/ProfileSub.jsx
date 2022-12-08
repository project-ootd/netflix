import axios from "axios";
import { BACKEND_URL } from "../utils";
import React, { useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { useState } from "react";

const ProfileSub = ({ setClick, subclick, setSubclick, profileUser }) => {
  const [userName, setUserName] = useState("");
  const [gameName, setGameName] = useState("");
  const userId = sessionStorage.getItem("email");

  // const [profileUser, setProfileUser] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/user/getProfile?userId=${userId}}`,
        method: "GET",
      });
      console.log(data.data);
      // setProfileUser(data.data);
    };
    getProfile();
  }, []);

  return (
    <div className="profile_click">
      <h1>프로필 변경</h1>
      <hr />
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const data = await axios({
              url: `${BACKEND_URL}/api/v1/user/profile?${userId}`,
              method: "POST",
              data: {
                nickname: !userName ? profileUser.userName : userName,
              },
            });
            alert(" 성공");
          } catch (e) {
            alert(" 실패");
          }
        }}
      >
        <div className="profile_click_inner flex">
          <div className="profile_avatar_box">
            <img
              src="http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
              alt=""
            />
            <div
              className="pofile_detail_img_btn"
              onClick={() => {
                setSubclick(!subclick);
              }}
            >
              <BsPencil
                style={{
                  position: "absolute",
                  top: "16%",
                  left: "5%",
                  background: "#000000b3",
                  fontSize: "20px",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <div className="profile_text_box">
            <div className="name_box">
              <input
                type="text"
                className="name"
                placeholder="프로필명"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="language_box">
              <h2>언어</h2>
              <select name="language" id="language">
                <option value="한국어">한국어</option>
                <option value="영어">English</option>
                <option value="중국어">中文</option>
                <option value="일본어">日本語</option>
                <option value="태국어">ไทย</option>
              </select>
            </div>
            <div className="game_name_box">
              <h2>게임 닉네임: </h2>
              <div className="gamesHandleDescription">
                닉네임은 모든 넷플릭스 게임에서 다른 넷플릭스 회원들과 같이
                플레이할 때 사용되는 고유의 이름입니다.
                <a href="/">자세히알아보기</a>
              </div>
              <input
                type="text"
                className="gameName"
                placeholder="게임 닉네임 등록"
                value={gameName}
                onChange={(e) => {
                  setGameName(e.target.value);
                }}
              />
            </div>

            <hr />

            <div className="film_rating_box">
              <h2>관람등급 설정:</h2>
              <div className="film_rating_all">모든 관람등급</div>
              <div className="film_rating_text">
                이 프로필에서는 모든 관람등급의 콘텐츠가 표시됩니다.
              </div>
              <div className="film_rating_btn">수정</div>
            </div>

            <hr />

            <div className="autoplay_setting_box">
              <h2>자동 재생 설정</h2>
              <div className="check1">
                <input type="checkbox" id="check1" name="check1" />
                <label htmlFor="check1"></label>
                모든 디바이스에서 시리즈의 다음 화 자동 재생
              </div>
              <div className="check2">
                <input type="checkbox" id="check2" name="check2" />
                <label htmlFor="check2"></label>
                모든 디바이스에서 탐색 중 미리보기 자동 재생
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="form_btn_box">
          <button
            className="save"
            type="submit"
            // onClick={() => {
            //   setProfile();
            // }}
          >
            저장
          </button>
          <button
            className="cancle"
            onClick={() => {
              setClick(false);
            }}
          >
            취소
          </button>
          <button className="delete">프로필 삭제</button>
        </div>
      </form>
      <br />
    </div>
  );
};

export default ProfileSub;
