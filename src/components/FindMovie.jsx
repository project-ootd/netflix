import React from "react";

import SlideImg from "./SlideImg";
const FindMovie = ({ kDramas, openModal, check }) => {
  console.log(kDramas);
  return (
    <div className="movieWrap">
      <div className="movieBox">
        {kDramas &&
          kDramas?.map((ele, index) => {
            // console.log("map : ", ele);
            return (
              <div className="movieItem" key={index}>
                <SlideImg
                  index={index}
                  ele={ele}
                  openModal={openModal}
                  check={check}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FindMovie;
