import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TestSlide.scss";

const TestSlide = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "" }}
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
    dots: true, //carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
    arrows: true,
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
    slidesToShow: 5, //한 화면에 보이는 콘텐츠 개수를 말한다.
    slidesToScroll: 5, //한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
    centerMode: false,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slide-body">
      <h2 className="top-10-text"> 오늘 대한민국의 TOP 10 시리즈 </h2>
      <Slider {...settings}>
        <svg
          id="rank-1"
          width="10%"
          height="10%"
          viewBox="-2 0 100 150"
          class="svg-icon svg-icon-rank-1 top-10-rank"
        >
          <path
            stroke="#595959"
            stroke-linejoin="square"
            stroke-width="1"
            d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"
          ></path>
        </svg>
        <div className="ranking-img">
          <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcMimjL8Vnd6v48cqSYdiXU9qztOF7BtSuV08ZRJPyyct0pUsd_QxbSWOBrlbk38GtrDjhsucz5eUxFuCEVQlimHEX7W_YxdU1ChpzPUes2Yf2HesQs3ow26d5fdzrFLHDQAqyYYrcWF3IBBTP5KwPBwakGuNo7_gI-w-AUSE_OlOY9peUs1xdcjnaZqX9kz4GQ2mnrEkiLM-ainpyhFLX2oIpIgbBPtaGXoFdcS_2jKwPtWau3yIe9IVgfRf2IgNXsS5GxnxdypjxdTHjjHiQoG0LHfIKn4hsmCtT_dnRobBs7XDZOpUR4Yd-NBqIOAWIxi1mh9s_nDFo7Ut1bWxeJbDU0NFX48JmUXvNuXbQSStaAwO_lpG4gs_kd27dSVJ7aVvHkqfJMPq7GkxO3ebzZH7i-O_pmqt4HOqBLezUZbRE4.webp?r=0c3" />
        </div>
        <svg
          id="rank-2"
          width="10%"
          height="10%"
          viewBox="-2 0 100 150"
          class="svg-icon svg-icon-rank-2 top-10-rank"
        >
          <path
            stroke="#595959"
            stroke-linejoin="square"
            stroke-width="4"
            d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"
          ></path>
        </svg>
        <div>
          <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSzEfY_25mkZ4wV3phQ584OGJHQ2c4sR3eff2JtoOkS5qRXHgACd9AL4Js0UJ1sWWD77DfLDbS7biAxl6HYpvUWs2_TptKV71mIh6R0sI-lSB5M4aC8x3uHwcKZsZObMzM2Nmw.jpg?r=ec8" />
        </div>
        <svg
          id="rank-3"
          width="10%"
          height="10%"
          viewBox="-2 0 100 150"
          class="svg-icon svg-icon-rank-3 top-10-rank"
        >
          <path
            stroke="#595959"
            stroke-linejoin="square"
            stroke-width="4"
            d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"
          ></path>
        </svg>
        <div>
          <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTHUvkCa5OiNeTmrAaCVJtt1TGs6g1dpGg6AlPgrrmFBF1WgrkDUw-oZunfJkI4BSyzYOyP9iUkZvKc_6LXwH9bdNx7F8BSJY7Zy.webp?r=c75" />
        </div>
        <div>
          <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTcaOBtkncGVx7d4TroAsRHaVz1IWp0GWepl6x_7vnq0h-hFQzhk8_dAC6MbmqfjXVUsNc5Zbw1bMIgkuMuvQLQlsF6LLig14GmPldvzaFT_oVtDswI9As3JNA0CjwUNpIS_9j2DVTHPXGxZKu4lOReE6vi0Qr8RkMQdLLb1JtBBjhdLr6rc28HsYyIlWn-XeKX7wev7oLcTzAiScE9kCFlJ8fCN0vY14khixE1dIVQN8o2s4QMC67aU8q2Y6fcC-k6C5g.webp?r=10d" />
        </div>
        <div>
          <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVXE5JseRhmv8jHeMUBxHTKkmVCjGHe3BLsK1FlmlbQ4a1oX1D-lhYv8PNVYNszE9ja8pm_I9ofZgZZs8yiSdq_n0dvZeqiJMFEZnmHyqvEeKlfUBk5Apz2QpV_vn-eSKpafpyfHmTZUHxbKQIoTLEZ7uFPA7jyplLOMjgt_2EqeN9KizGUYoPE4Ve65iCr4S24Jwhh2mCQzHAJxLD7S7JvSpru3kJ3d__P_WJMXom1IjNICqAolEkyqyCO0rMio2fit7zhaxwBpraeMqxMz69rYFlEb_q2WOSN_IyZbLpq6lYaYuI9VQKpt0V4QV-LAErQCGvdUqt_CumELaV0vEYaKWg6klRlq5HOtJHM9wZSgoo7Vf-mqgqm29B7BqvdOsxYGwY0uXGUuGUS42lslSIm1_3a7D4A5_FCtO8i1zUDEZP4.webp?r=a5d" />
        </div>
        <div>
          <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXkmYiLKioaxPLCL-Haocpo7_Ybi7SZ6XaCGFBUfX1ahik1uD5u2U_bX-VXk8xvCAyTQP5JFnzYJ3PPYc0jueQdtq6wCrDiAJ3GXRbbf6aLeEiwc8joBs69gqOECuDVKQsvzNw.jpg?r=a0e" />
        </div>
        <div>
          <img src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWFf2A1ud7UPVupsRKidH0T_dkK3AfkxkbCEkw5113L28u-UiCF7E3TJsnrZVzn6esxaw5zBXZaxzAopzocLIhlTlKgSO5RsXHQl.webp?r=e48" />
        </div>
        <div>
          <img src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQV_xpMmbIAdBFSuC-HZ9TASK685qaorR-xXvF4KOorfmqu8GvUYZxtUfGeqkS4wvJyhIxGjJABPKHWfUN1AS-YmEx_JwiCeo1ShOE8609fIPDSjLy4lTZv5ywOIsfk8cNehX0RN3z4z6IPQ6h4nC-A3ycQ-FKDJoyqqeCZnTYSGK9FOymenEq1ThQPgpAK-oMYpiZKZUhyNrtQr9anxYY1s96qG2BYZd3MYrRZOAM4JnrwZcQVGNoAXdYw91XUYCNJPDFasyNmbVwmYI86jtvtgd96T_tLcz0nZW_GF2c32fyKizzSZxbKrDtndCSwACD4dRHA8Ltql9FXWtttM5hZVcLW1Pd-0uUVggyXWpLFpBL0DVD1PtoXq3PucI2V3lIXPrhSvMD5x9VvE3vKnGX3TxXDuiAxaOWiF5FW29xfY3HE.webp?r=a95" />
        </div>
        <div>
          <img src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABa3dx-PLRXnGS7JfarLQo3-HGKDO1XZsDdIH8iJ-dnYL7TB01TCUxenaMyDRLk9vQrS68VPmVTCliwbaqXeOJ-MlBt6bT1pzWKn5.webp?r=d88" />
        </div>
        <div>
          <img src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTJ2haaoJog4zt1eiLj1pCbSJ60K1Zlm5SzdnYma6VcnyC-YJcCLL1euQwFuJbAsRwJJd0_5ZDOW0T9Sio8EVzr6TTRO6qu5gwe2p_afgp_ah_SVYh47kYx9KTrvmlqnMn8P-K0VWUImOohE5mWpqd3fkjLLggV2MJR58tSTblmRO68OhZijz_PNAJKGGgEE95FtEi-6rZxGX0_MoSbpDUYLp5ODJRWR82YUSpr7jRlD8pUQeIWxdtGzTv8BfQYtajuRkIgXO8x8M89JcFSNOgUnJq-BWUnwb77gjb8jwbogBf0-47SRasiirib7HP9_JdOkkSFpaljhPi6fxhUt_D01Hz8Q66lkbp68DoNmS74VVTcwB2VXxxr4zozVEJqxV0ZXXQqNKm_JTFVwK4Xe_b4KetOt0jR0fXKXV8i0BXjG-00.webp?r=60e" />
        </div>
      </Slider>
    </div>
  );
};

export default TestSlide;
