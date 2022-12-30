import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BACKEND_URL } from "../utils";

const ProfileIcon = ({ setSubclick, subclick, profileUser, profileIndex }) => {
  const [imgNo, setImgNo] = useState(0);
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/getprofileImg`,
        method: "GET",
      });

      setImgList(data.data);
    };
    getProfile();

    // const ImgProfile = async () => {
    //   const data = await axios({
    //     url: `${BACKEND_URL}/api/v1/user/userSetProfileImg`,
    //     method: "POST",
    //     params: {
    //       useremail: sessionStorage.getItem("email"),
    //     },
    //     data: {
    //       id: profileUser.profileNameList[profileIndex].id,
    //       img: imgNo,
    //     },
    //   });
    //   console.log("img : ", data.data);
    // };
    // ImgProfile();
  }, []);

  return (
    <div className="profile_icon_wrap">
      <div className="profile_icon_header flex">
        <div className="back_btn">
          <BsArrowLeftShort
            onClick={() => {
              setSubclick(!subclick);
            }}
          />
        </div>
        <div className="text_box">
          <h2>프로필 변경</h2>
          <h3>프로필 아이콘을 선택하세요.</h3>
        </div>
        <div className="profile_info flex flex_ai_c">
          <div className="name">하늘</div>
          <div className="img">
            <img
              src="http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="profile_icon_choice_box">
        <h1>대표 아이콘</h1>
        <ul className="icon_choice flex">
          {imgList.map((img, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setImgNo(img.id);
                  sessionStorage.setItem("profileImg", img.imageUrl);

                  const ImgProfile = async () => {
                    const data = await axios({
                      url: `${BACKEND_URL}/api/v1/userSetProfileImg`,
                      method: "POST",
                      params: {
                        useremail: sessionStorage.getItem("email"),
                      },
                      data: {
                        id: profileUser.profileNameList[profileIndex].id,
                        img: img.id,
                      },
                    });
                  };
                  ImgProfile();
                  setSubclick(!subclick);
                }}
              >
                <img src={img.imageUrl} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfileIcon;
