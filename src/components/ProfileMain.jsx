import React from "react";
import { BsPencil } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";

const ProfileMain = ({ click, setClick, profileUser }) => {
  return (
    <div className="profile_inner">
      <h1>프로필 관리</h1>
      <div className="profile_box">
        <ul>
          <li
            className="profile_items"
            onClick={() => {
              setClick(!click);
            }}
          >
            <div className="profile_img_box">
              <img
                src="http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                alt=""
              />
            </div>
            <div className="profile_pencil">
              <BsPencil />
            </div>
            <div className="profile_name">{profileUser?.gameName}</div>
          </li>
          <li
            className="profile_items"
            onClick={() => {
              setClick(!click);
            }}
          >
            <div className="profile_img_box">
              <img
                src="http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                alt=""
              />
            </div>
            <div className="profile_pencil">
              <BsPencil />
            </div>
            <div className="profile_name">안녕</div>
          </li>
          <li
            className="profile_items"
            onClick={() => {
              setClick(!click);
            }}
          >
            <div className="profile_img_box">
              <img
                src="http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                alt=""
              />
            </div>
            <div className="profile_pencil">
              <BsPencil />
            </div>
            <div className="profile_name">안녕</div>
          </li>
          <li
            className="profile_items"
            onClick={() => {
              setClick(!click);
            }}
          >
            <div className="profile_img_box">
              <img
                src="http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                alt=""
              />
            </div>
            <div className="profile_pencil">
              <BsPencil />
            </div>
            <div className="profile_name">안녕</div>
          </li>
          <li className="profile_items last_profile_items">
            <div className="profile_img_box">
              <FaPlusCircle />
            </div>
            <div className="profile_name">프로필 추가</div>
          </li>
        </ul>

        <div className="btn_box">
          <div className="finish_btn">완료</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
