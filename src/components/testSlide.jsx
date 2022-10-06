import React, { Component } from "react";
import "../styles/TestSlide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestSlide = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",  background:"" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: ""}}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false, //carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
    arrows: true,
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
    speed: 500, //콘텐츠를 넘어갈 때 속도이다.단위 (ms)이다. 1000ms = 1s
    slidesToShow: 5, //한 화면에 보이는 콘텐츠 개수를 말한다.
    slidesToScroll: 2, //한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnFocus: false,
  };
  return (
    <div className="slide-body">
      <h2> Slide test</h2>
      <Slider {...settings}>
        <div className="ranking-num">1</div>
        <div className="ranking-img">
            <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcMimjL8Vnd6v48cqSYdiXU9qztOF7BtSuV08ZRJPyyct0pUsd_QxbSWOBrlbk38GtrDjhsucz5eUxFuCEVQlimHEX7W_YxdU1ChpzPUes2Yf2HesQs3ow26d5fdzrFLHDQAqyYYrcWF3IBBTP5KwPBwakGuNo7_gI-w-AUSE_OlOY9peUs1xdcjnaZqX9kz4GQ2mnrEkiLM-ainpyhFLX2oIpIgbBPtaGXoFdcS_2jKwPtWau3yIe9IVgfRf2IgNXsS5GxnxdypjxdTHjjHiQoG0LHfIKn4hsmCtT_dnRobBs7XDZOpUR4Yd-NBqIOAWIxi1mh9s_nDFo7Ut1bWxeJbDU0NFX48JmUXvNuXbQSStaAwO_lpG4gs_kd27dSVJ7aVvHkqfJMPq7GkxO3ebzZH7i-O_pmqt4HOqBLezUZbRE4.webp?r=0c3" />
        </div>
        <div>
            <img src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSzEfY_25mkZ4wV3phQ584OGJHQ2c4sR3eff2JtoOkS5qRXHgACd9AL4Js0UJ1sWWD77DfLDbS7biAxl6HYpvUWs2_TptKV71mIh6R0sI-lSB5M4aC8x3uHwcKZsZObMzM2Nmw.jpg?r=ec8" />
        </div>
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
        {/* <div>
              <img src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWWbBrEaKKICSkZmRDn6nfEYPf0zcZatHk2kIvmpFwFeEJ9BZMhIBQco-oHhG8ZLCLxZ3E79yUGXaDJL3xST5VMqXwQtEedcf1oh.webp?r=973" />
          </div>
          <div>
              <img src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQp9rRE-iDHPDLTtOTHiNQGWEVd0assYsocGX0d0HLAdTBQlhNYO9gnAKm3hWdJkitEPqr90m8ymUipm3ZjlytRaNYoIJPHo7VRqbzMKS9E1gH8LKb0Le_HzQQ2PSGjdn-rxSY6Jlp75UfB8cchXt12wsvJDdNlq3rNjXu-iMT9yJl_uajIJjrgJRcYwkHiFZUjNWWNN4hG5SNsoUtjw0DCA3pJRrFQ7bPgGxefVSntIpPrRKxR3qiQjK9Rbl0dJH68XMS5bIPKPU-Sid47aLbaL4doBorD2W2-5O9rGtU1IpXmqLcuscgnQ68nmwCoSS4gqCL78svoKzt1ke8dY_aE1vo_qdKvQgzWCil298cMXngsWMuFcpcBVxzl7q-EZGzsGkNEzDoKqHgnFbBFJRjDL6cgn8jgCuFhum7QhcrKbQYc.webp?r=18d" />
          </div> */}
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
