import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../utils";
import "../styles/MyList.css";
import Footer from "./Footer";

const Mylist = () => {
  const [contents, setContents] = useState([]);
  const onContents = (data) => {
    setContents(data);
  };
  useEffect(() => {
    const getData = async () => {
      const email = sessionStorage.getItem("email");
      console.log(email);
      const data = await axios({
        url: `${BACKEND_URL}/browse/my-list`,
        method: "get",
        params: {
          useremail: email,
        },
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      onContents(data.data);
    };
    getData();
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const email = sessionStorage.getItem("email");
  //     console.log(email);
  //     const data = await axios({
  //       url: `${BACKEND_URL}/browse/my-list`,
  //       method: "get",
  //       params: {
  //         useremail: email,
  //       },
  //     });
  //     onContents(data.data);
  //     console.log(data.data);
  //   };
  //   getData();
  // }, [contents]);
  return (
    <div>
      {/* <Header /> */}
      <div className="my-list-box">
        <div className="my-list-header-text">
          <div className="title-text">내가 찜한 컨텐츠</div>
        </div>
        {contents.map((contents, index) => {
          return (
            <div className="search-container" key={index}>
              <div className="search-result">
                <div className="search-thumbnail" key={contents.id}>
                  <a href="#">
                    <img
                      className="search-thumbnail-img"
                      src={contents?.contentImg}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Mylist;
