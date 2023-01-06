import React from "react";

import SlideImg from "./SlideImg";
import "../styles/MyListContents.css";

const OriginalAudioList = ({
  openModal,
  setZindex,
  check,
  setCheck,
  originalcon,
}) => {
  return (
    <div className="list-con">
      <div className="list-box">
        {originalcon &&
          originalcon?.map((ele, index) => {
            console.log(ele);
            return (
              <div className="content-box" key={index}>
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

export default OriginalAudioList;
