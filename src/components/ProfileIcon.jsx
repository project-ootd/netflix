import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const ProfileIcon = () => {
  return (
    <div className="profile_icon_wrap">
      <div className="profile_icon_header flex">
        <div className="back_btn">
          <BsArrowLeftShort />
        </div>
        <div className="text_box">
          <h2>프로필 변경</h2>
          <h3>프로필 아이콘을 선택하세요.</h3>
        </div>
        <div className="profile_info flex flex_ai_c">
          <div className="name">하늘</div>
          <div className="img">
            <img
              src="http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="profile_icon_choice_box">
        <h1>대표 아이콘</h1>
        <ul className="icon_choice flex">
          <li>
            <img
              src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVAOVZB6hbXn66eL28YYwIrZ3y7G9clKxQtWp-2Dc1_uq2MuLsPa_mD3N1jJlpMc_61au7gZ69iuTZmeg_YjE-5YKAGbR8JFKg.png?r=7c7"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD0ZrsIMMPdVENlhcMLhAEQsGSplhivXwxPolt5h1wP1bquIL83x4fkrS6we4cwNWTe1nn7exw7GDMLe-72PiRcoMIBjdjmmA.png?r=b39"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQF7SR467QFM7baRi8ZVxwtPaStoMd9-KZ8qZqba8Tuu8x9OWqkYvzubJwrfBQmJp0spenD2JvuyNz7H1OuY3zhTr6_hZokHwQ.png?r=6a6"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?r=201"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVAOVZB6hbXn66eL28YYwIrZ3y7G9clKxQtWp-2Dc1_uq2MuLsPa_mD3N1jJlpMc_61au7gZ69iuTZmeg_YjE-5YKAGbR8JFKg.png?r=7c7"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD0ZrsIMMPdVENlhcMLhAEQsGSplhivXwxPolt5h1wP1bquIL83x4fkrS6we4cwNWTe1nn7exw7GDMLe-72PiRcoMIBjdjmmA.png?r=b39"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileIcon;
