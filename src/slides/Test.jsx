import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import Slider from "react-slick";
import "../styles/Test.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideVideo from "../components/SlideVideo";

const Test = (openModal, kDramas) => {
  const [dramas, setDramas] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const dramas = await axios.get(`${BACKEND_URL}/contents?kw=DRAMA`);
      setDramas(dramas.data);
    };
    getData();
  }, []);
  // Slick 세팅 시작
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          //   alignContent: "center",
          backgroundColor: "",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignContent: "flex-start",
          background: "",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false, //carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
    arrows: true,
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
    slidesToShow: 6, //한 화면에 보이는 콘텐츠 개수를 말한다.
    slidesToScroll: 6, //한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // Slick 세팅 끝
  return (
    <div
      className="slide-body"
      style={{
        zIndex: "3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="ranking-slide-body">
        <h2 className="text-test" id="text-test">
          {" "}
          오늘 대한민국의 TOP 10 시리즈{" "}
        </h2>

        <Slider {...settings}>
          {/* rank 1 */}
          {dramas.map((ele, index) => {
            return (
              <div className="thumbnail-container" key={index}>
                <div className="real-container">
                  <img className="thumbnail-img" src={ele?.contentImg} alt="" />
                </div>
                {/* <div className="slide_video_box">
                  <SlideVideo openModal={openModal} ranking={dramas[0]} />
                </div> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Test;
