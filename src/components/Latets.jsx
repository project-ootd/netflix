import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsHandThumbsDown,
} from "react-icons/bs";
import SlideImg from "./SlideImg";
import Slider from "react-slick";
import RankingSlide from "./RankingSlide";
import { useRecoilState } from "recoil";
import { rankingState } from "../recoil/ranking";

const Latets = ({ openModal, kDramas, check, setCheck }) => {
  const [ranks, setRanks] = useState([]);
  const [dramas, setDramas] = useState([]);
  const [riseups, setRiseups] = useState([]);
  const [actionAnimes, setActionAnimes] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [only, setOnly] = useState([]);
  const [zindex, setZindex] = useState(false);
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [allContents, setAllContents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const ranks = await axios.get(`${BACKEND_URL}/contents?kw=RANK`);
      const dramas = await axios.get(`${BACKEND_URL}/contents?kw=DRAMA`);
      const riseups = await axios.get(`${BACKEND_URL}/contents?kw=RISE-UP`);
      const actionAnimes = await axios.get(
        `${BACKEND_URL}/contents?kw=ANI-ACT`
      );
      const populars = await axios.get(
        `${BACKEND_URL}/contents?kw=NETFLIX-POP`
      );
      const only = await axios.get(`${BACKEND_URL}/contents?kw=NETFLIX-ONLY`);

      setRanks(ranks.data);
      setDramas(dramas.data);
      setRiseups(riseups.data);
      setActionAnimes(actionAnimes.data);
      setPopulars(populars.data);
      setOnly(only.data);
    };
    getData();
  }, []);

  // Slick μΈν μμ
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", backgroundColor: "" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false, //carousel λ°μ μ§μ  μ½νμΈ λ‘ λ°λ‘ μ΄λν  μ μλ λ²νΌμ λ»νλ€. flase ν μ μ¬λΌμ§λ€.
    arrows: true,
    infinite: true, // μ½νμΈ  λκΉμ§ κ°μ λ λ€μ μ½νμΈ λ₯Ό μ²μ μ½νμΈ λ‘ κ°μ Έμ λ°λ³΅νλ€.
    slidesToShow: 6, //ν νλ©΄μ λ³΄μ΄λ μ½νμΈ  κ°μλ₯Ό λ§νλ€.
    slidesToScroll: 6, //ν λ²μ λμ΄κ°λ μ½νμΈ  μμ΄λ€. 2λ‘ μ νλ©΄ 2κ°μ© λμ΄κ°λ€.
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    const getRank = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/rank`,
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setRanking(data.data);
    };
    getRank();

    const getContent = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/allcontent`,
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });

      setAllContents(data.data);
    };
    getContent();
  }, []);

  return (
    <div
      className="slide-body"
      style={{
        zIndex: "3",
        position: "relative",
        overflow: "hidden",
        padding: " 0 0 5vh 0",
      }}
    >
      <div className="slideItems-all-container">
        <div
          className="slide-container flex flex_jc_start"
          style={{ marginTop: "50px" }}
        >
          <a href="#">
            <div
              className="slide-title-text text-test"
              style={zindex ? { zIndex: "0" } : { zIndex: "1" }}
            >
              μ΄λ² μ£Ό κ³΅κ°λ νκ΅­ λλΌλ§
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">λͺ¨λ λ³΄κΈ°</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
              {/* </div> */}
            </div>
          </a>
        </div>
        <Slider {...settings}>
          {/* rank 1 */}
          {dramas.map((ele, index) => {
            return (
              <SlideImg
                key={index}
                index={index}
                ele={ele}
                openModal={openModal}
                setZindex={setZindex}
                check={check}
              />
            );
          })}
        </Slider>
      </div>
      <div className="ranking-con" style={{ marginTop: "14vh" }}>
        <RankingSlide
          openModal={openModal}
          ranking={ranking}
          allContents={allContents}
          check={check}
        />
      </div>
      <div className="slideItems-all-container">
        <div className="slide-container flex flex_jc_start">
          <a href="#">
            <div
              className="slide-title-text text-test"
              style={zindex ? { zIndex: "0" } : { zIndex: "1" }}
            >
              μ§κΈ λ¨λ μ½νμΈ 
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">λͺ¨λ λ³΄κΈ°</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
              {/* </div> */}
            </div>
          </a>
        </div>
        <Slider {...settings}>
          {/* rank 1 */}
          {riseups.map((ele, index) => {
            return (
              <SlideImg
                ele={ele}
                key={index}
                index={index}
                openModal={openModal}
                style={{ zIndex: "10" }}
                setZindex={setZindex}
                check={check}
              />
            );
          })}
        </Slider>
      </div>

      <div className="slideItems-all-container">
        <div className="slide-container flex flex_jc_start">
          <a href="#">
            <div
              className="slide-title-text text-test"
              style={zindex ? { zIndex: "0" } : { zIndex: "1" }}
            >
              μ΄λ² μ£Ό κ³΅κ°λ μ‘μ μ λ
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">λͺ¨λ λ³΄κΈ°</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
              {/* </div> */}
            </div>
          </a>
        </div>
        <Slider {...settings}>
          {/* rank 1 */}
          {actionAnimes.map((ele, index) => {
            return (
              <SlideImg
                ele={ele}
                key={index}
                index={index}
                openModal={openModal}
                style={{ zIndex: "10" }}
                setZindex={setZindex}
                check={check}
              />
            );
          })}
        </Slider>
      </div>

      <div className="slideItems-all-container">
        <div className="slide-container flex flex_jc_start">
          <a href="#">
            <div
              className="slide-title-text text-test"
              style={zindex ? { zIndex: "0" } : { zIndex: "1" }}
            >
              μ΄λ² μ£Ό λ·νλ¦­μ€ μΈκΈ° μ»¨νμΈ 
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">λͺ¨λ λ³΄κΈ°</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
              {/* </div> */}
            </div>
          </a>
        </div>
        <Slider {...settings}>
          {/* rank 1 */}
          {populars.map((ele, index) => {
            return (
              <SlideImg
                ele={ele}
                key={index}
                index={index}
                openModal={openModal}
                style={{ zIndex: "10" }}
                setZindex={setZindex}
                check={check}
              />
            );
          })}
        </Slider>
      </div>

      <div
        className="slideItems-all-container"
        style={{ paddingBottom: "3vh" }}
      >
        <div className="slide-container flex flex_jc_start">
          <a href="#">
            <div
              className="slide-title-text text-test"
              style={zindex ? { zIndex: "0" } : { zIndex: "1" }}
            >
              μ€μ§ λ·νλ¦­μ€μμλ§
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">λͺ¨λ λ³΄κΈ°</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
              {/* </div> */}
            </div>
          </a>
        </div>
        <Slider {...settings}>
          {/* rank 1 */}
          {only.map((ele, index) => {
            return (
              <SlideImg
                ele={ele}
                key={index}
                index={index}
                openModal={openModal}
                style={{ zIndex: "10" }}
                setZindex={setZindex}
                check={check}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Latets;
