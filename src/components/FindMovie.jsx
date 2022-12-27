import React from "react";

import SlideImg from "./SlideImg";
const FindMovie = ({ kDramas, setZindex, openModal, check }) => {
  console.log(kDramas);
  return (
    <div className="movieWrap">
      <div className="movieBox">
        {kDramas?.map((ele, index) => {
          return (
            <div className="movieItem" key={index}>
              <SlideImg
                index={index}
                ele={ele}
                openModal={openModal}
                setZindex={setZindex}
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
