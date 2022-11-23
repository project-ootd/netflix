import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Search.scss";

const Search = () => {
  const { search } = useParams();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const keyword = await axios.get(`${BACKEND_URL}/search/${search}`);
      setContents(keyword.data);
      console.log(keyword.data);
    };
    getItem();
  }, [search]);

  return (
    <>
      <Header />
      <div className="search-title-header">
        <div className="rail">
          <div className="suggestions">
            <div className="ptrack-container">
              <div className="ptrack-content">
                <div className="suggestionRailContainer">
                  <span className="suggestionsLabel">
                    다음과 관련된 콘텐츠:
                  </span>
                  <ul>
                    <li className="">
                      <div className="ptrack-content">
                        <a href="#">일본 TV 드라마1</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {contents.map((ele, index) => {
        return (
          <div className="search-container">
            <div className="search-result">
              <div className="search-thumbnail" key={index}>
                <a href="#">
                  <img
                    className="search-thumbnail-img"
                    src={ele?.contentImg}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Search;
