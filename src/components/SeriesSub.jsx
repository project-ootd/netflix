import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useRecoilState } from "recoil";
import { rankingState } from "../recoil/ranking";
import { BACKEND_URL } from "../utils";
import RankingSlide from "./RankingSlide";
import SlideImg from "./SlideImg";

const SeriesSub = ({ openModal, kDaramas, check }) => {
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

  // Slick 세팅 시작
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
    dots: false, //carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
    arrows: true,
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
    slidesToShow: 6, //한 화면에 보이는 콘텐츠 개수를 말한다.
    slidesToScroll: 6, //한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    const getRank = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/rank`,
        method: "GET",
      });
      setRanking(data.data);
    };
    getRank();

    const getContent = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/allcontent`,
        method: "GET",
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
              한국 드라마
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">모두 보기</div>
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

      <div className="slideItems-all-container">
        <div className="slide-container flex flex_jc_start">
          <a href="#">
            <div
              className="slide-title-text text-test"
              style={zindex ? { zIndex: "0" } : { zIndex: "1" }}
            >
              지금 뜨는 콘텐츠
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">모두 보기</div>
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
              일본 애니메이션
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">모두 보기</div>
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
      <div className="ranking-con" style={{ marginTop: "12vh" }}>
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
              넷플릭스 인기 컨텐츠
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">모두 보기</div>
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
              오직 넷플릭스에서만
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">모두 보기</div>
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

export default SeriesSub;
