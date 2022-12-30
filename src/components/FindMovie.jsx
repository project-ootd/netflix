import React from "react";

import SlideImg from "./SlideImg";
const FindMovie = ({ kDramas, openModal, setZindex, check, setCheck }) => {
  return (
    <div className="movieWrap">
      <div className="movieBox">
        {kDramas &&
          kDramas?.map((ele, index) => {
            return (
              <div className="movieItem" key={index}>
                <SlideImg
                  ele={ele}
                  index={index}
                  openModal={openModal}
                  setZindex={setZindex}
                  check={check}
                  setCheck={setCheck}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FindMovie;
