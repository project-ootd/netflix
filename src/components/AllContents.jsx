import React from "react";
import KoreanDrama from "../slides/KoreanDrama";
import Header from "./Header";
import RankingSlide from "./RankingSlide";
import TestVideo from "./TestVideo";

const AllContents = () => {
  return (
    <div>
      <Header />
      <TestVideo />
      <RankingSlide />
      <KoreanDrama />
    </div>
  );
};

export default AllContents;
