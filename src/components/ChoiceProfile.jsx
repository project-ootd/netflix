import React from "react";
import "../styles/ChoiceProfile.css";

const ChoiceProfile = () => {
  return (
    <div className="choice-head" sytle={{ display: "flex" }}>
      <div className="con-box">
        <div className="profile-box">
          <h1>넷플릭스를 시청할 프로필을 선택하세요</h1>
          <ul className="profile-list">
            <li className="profile-item">
              {" "}
              <div>
                <a href="/">
                  <div className="first-profile" style={{}}></div>
                  <div href="/">num1</div>
                </a>
              </div>
            </li>
            <li className="profile-item">
              <div>
                <a href="/">
                  <img
                    src="https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                    alt=""
                  />
                </a>
                <a href="/">num2</a>
              </div>
            </li>
            <li className="profile-item">
              <div>
                <a href="/">
                  <img
                    src="https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTpGJ10BG0ND_0g7-9qiFb9bvXgAtmEXEfmRY7XjMqB3axaO9e4eIxTxQzIbQYOW46KHMQgaGUmhkXQdt4jDovDpVe_DBCJI1NXX.png?r=438"
                    alt=""
                  />
                </a>
                <a href="/">num3</a>
              </div>
            </li>
            <li className="profile-item">
              <div>
                <a href="/">
                  <img
                    src="https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVrwTVUu0vi8TrkRGVeBGYVORH9qG1D6nXpX9cMWJp71hXVzawvt73UKs76KXcn_bEj41nibhNDQ_24hOcVfQ7swug6DZcLWuR-N.png?r=59d"
                    alt=""
                  />
                </a>
                <a href="/">num4</a>
              </div>
            </li>
            <li className="profile-item">
              {" "}
              <div>
                <a href="/">
                  <img
                    src="https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRZ9UvLLN8tmuXW65YweIeYLuhKgR4qnSL0rVwNF6rgxxbsMoW9mCtlxPcz76Ti7bnciG7lE4WcqR8Z7YVM4xjX_-r0wd449rgnY.png?r=acf"
                    alt=""
                  />
                </a>
                <a href="/">키즈</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChoiceProfile;
