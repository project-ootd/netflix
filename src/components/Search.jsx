import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { serachState } from "../recoil/search";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Search.scss";
import Footer from "./Footer";
import SlideImg from "./SlideImg";
import Modal from "./Modal";
import FindMovie from "./FindMovie";

const Search = () => {
  const search = useRecoilValue(serachState);
  const [contents, setContents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({});
  const [zIndex, setZindex] = useState(false);

  const [check, setCheck] = useState([]);

  const openModal = (content) => {
    setModalOpen(true);
    setCurrentContent(content);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
      console.log(keyword.data);
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

      <div className="search_wrap">
        <div className="search_box">
          {contents?.map((ele, index) => {
            return (
              <div className="search-container1" key={index}>
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

      <Modal
        open={modalOpen}
        close={closeModal}
        header="Modal heading"
        currentContent={currentContent}
        check={check}
      />

      <Footer />
    </>
  );
};

export default Search;
