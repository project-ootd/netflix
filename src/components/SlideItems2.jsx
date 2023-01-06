import React from "react";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsHandThumbsDown,
} from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const SlideItems2 = () => {
  return (
    <div className="thumbnail-box2">
      <div className="thumbnail-img2">
        <img
          src="https://w.namu.la/s/2d0af44043838941db2436a8b8efac9a4c03099770765c404f8a30734b262aaba0b0ec30e8f8723d213278c057a1f8fca661c37f29a6f1e1656cd9808c5d43dd55c9db87a6fd121c95d228467cea2c8d35f2f53aa2b5203d2c38c0f83be9e70f78b7beb5e5aaf77d4a02dcd9f92f1727"
          alt=""
        />
      </div>
      <div className="thumbnail-content2">
        <div className="thumbnail-content__icon2">
          <div className="icon-left2">
            <BsPlayFill />
            <AiOutlineCheck />
            <BsHandThumbsUp />
            {/* <i className="fa-regular fa-thumbs-up"></i> */}
          </div>
          <div className="icon-right2">
            <BsChevronDown />
          </div>
        </div>

        <div className="thumbnail-content__txt2">
          <div className="video_mini_detail flex">
            <div className="text1">99% 일치</div>
            <div className="view_age">15+</div>
            <div className="episode"> 에피소드 5개</div>
            <div className="HD">HD</div>
          </div>
        </div>

        <ul className="video_genre flex">
          <li>범죄 시리즈, 한국 드라마, 무슨 카테고리</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideItems2;
