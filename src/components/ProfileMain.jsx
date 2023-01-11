import React from "react";
import { BsPencil } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileMain = ({ click, setClick, profileUser, setProfileIndex }) => {
  const navigate = useNavigate();
  const onNav = () => {
    navigate(`/browse`);
  };

  // console.log(profileUser?.profileNameList.length);
  return (
    <div className="profile_inner">
      <h1>프로필 관리</h1>
      <div className="profile_box">
        <ul>
          {profileUser?.profileNameList?.map((profile, index) => {
            return (
              <li
                key={index}
                className="profile_items"
                onClick={() => {
                  setClick(!click);
                  setProfileIndex(index);
                  sessionStorage.setItem("profileImg", profile.img);
                }}
              >
                <div className="profile_img_box">
                  <img
                    src={
                      profile?.img
                        ? profile.img
                        : "http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                    }
                    alt=""
                  />
                </div>
                <div className="profile_pencil">
                  <BsPencil />
                </div>
                <div className="profile_name">{profile?.nickname}</div>
              </li>
            );
          })}

          <li
            className="profile_items last_profile_items"
            onClick={() => {
              if (profileUser.profileNameList.length >= 4) {
                alert("더이상 프로필을 만들 수 없습니다.");
              } else {
                setClick(!click);
                setProfileIndex(null);
              }
            }}
          >
            <div className="profile_img_box">
              <FaPlusCircle />
            </div>
            <div className="profile_name">프로필 추가</div>
          </li>
        </ul>

        <div className="btn_box">
          <div
            className="finish_btn"
            onClick={() => {
              profileUser?.profileNameList.length == 0
                ? alert("프로필이 존재하지 않습니다.")
                : onNav();
            }}
          >
            완료
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
