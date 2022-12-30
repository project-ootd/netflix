import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { serachState } from "../recoil/search";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Search.scss";
import Footer from "./Footer";

const Search = () => {
  const search = useRecoilValue(serachState);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const keyword = await axios({
        url: `${BACKEND_URL}/search?q=${search}`,
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setContents(keyword.data);
    };
    getItem();
  }, [search]);

  return (
    <>
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
          <div className="search-container" key={index}>
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

      <Footer />
    </>
  );
};

export default Search;
