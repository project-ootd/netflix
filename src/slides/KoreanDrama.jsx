import React from "react";
import "../styles/Slides.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KoreanDrama = () => {
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
  return (
    <div className="korean-drama-slide">
      <div className="korean-drama-text flex flex_jc_start">
        <a href="#">
          <div className="korean-drama-text1">
            한국 드라마
            <div className="korean-drama-hover">
              <div className="korean-drama-text2">모두 보기</div>
              <img
                className="korean-drama-arrow"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
            </div>
          </div>
        </a>
      </div>
      <Slider className="korean-drama-arrows" {...settings}>
        {/* 1번째 */}
        <div className="korean-drama kd-1">
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTY8O3lhGydbqNCkwj4stCiwxwEfPaZ_wMPF8lx9ONQXoSdv_rKI9gPEyFNKT6QUAk7CfhvJqnkgORbNnm32XDMI6TyAACC27LQ.webp?r=586"
            alt=""
          />
        </div>

        {/* 2번째 */}
        <div className="korean-drama kd-2">
          <a
            href="/watch/81323551?tctx=4%2C1%2C%2C%2C%2C%2C%2C%2C"
            role="link"
            aria-label="경이로운 소문"
            tabindex="0"
            aria-hidden="false"
            className="slider-refocus"
          >
            <div className="boxart-size-16x9 boxart-container boxart-rounded">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUema4uXkX3HEkAEZxpiRJrY1veD0F342M34gjyrXepLZ5tb2wdsPpXnyOWODl8wr9nOq_5HkarzVP2h-RWiN9tdSNDZW0oiGKA.webp?r=d96"
                alt=""
              />
            </div>
          </a>
        </div>

        {/* 3번째 */}
        <div className="korean-drama kd-3">
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcAH-3_UMnWfbFybB4sP7Avj7F7m_rOLx-7n63fRphv8W1Vm3SS9n0oqgB2YsSh3mJCGAjB2ZtJInuEP4yttEoUx39ub5mx-7nw.webp?r=6da"
            alt=""
          />
        </div>

        {/* 4번째 */}

        <div className="korean-drama kd-4">
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUab2UjAb9h4rRmwo0RcR2nvqo396lNduRpCbbiBmGWTJa5qYIx6AQdyv8yx8pSK2QrG2XkaNyYc0T5Xf_THqwBXwVzdA718tPE.webp?r=f58"
            alt=""
          />
        </div>

        {/* 5번째 */}
        <div className="korean-drama kd-5">
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXgFqGzU2kSu28PBd4ujx9TTmJ8et6lC9kLdSugl7U_alWBaSBKho91A5mAE-Yv4DX63RWw_Wh2sUAjZr1RQGUbcrOD6Q1M9nwI.webp?r=bd3"
            alt=""
          />
        </div>

        {/* 6번째 */}
        <div className="korean-drama kd-6">
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSFJ_-1_1sa9kgKZYbujJ2rnoGWBlS8HKGiG-lNNDgQm7SkXh6oOvwRCpNtt7dfB6xlWir00J7DIwXJRsojaMjxU-xToUc8glAI.webp?r=e4c"
            alt=""
          />
        </div>

        {/* 7번째 */}
        <div className="korean-drama kd-7">
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU8i3_FVcBdHgNQUGNAhqEPSylZ_nzKXUphSXC9roSkNS2TpmTPpJwqJPI6DbnpXWicQToJYKlsR3-8yWYS12z_8XcHd1YXMqkU.webp?r=ebb"
            alt=""
          />
        </div>

        {/* 8번째 */}
        <div className="korean-drama kd-8">
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaXfhtqgWbbHeyNmqtJT-jMnmXrhzcHXzxOelsFTrARxMOgKXKpn51fDUoju9aOa5KmT2iMrycOCuH26YevH7FzAeIFzaY6N3L4.webp?r=f17"
            alt=""
          />
        </div>

        {/* 9번째 */}
        <div className="korean-drama kd-9">
          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon svg-icon-chevron-down"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
              fill="currentColor"
            ></path>
          </svg> */}
          <img
            className="kDramaThumbnail"
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdXZwM28pH9FSEeMQP3IHzz2z2uqtvGCJSo-CCBOsihQap4vBsRDoV_OTBnzPKyKk_qbCKvrNg__aS66hI0hv0W25bVyTm1rrqI.webp?r=f16"
            alt=""
          />
        </div>
        {/* <div className="sliderMask showPeek">
          <div class="sliderContent row-with-x-columns">
            <div className="slider-item slider-item-0">
              <div className="title-card-container ltr-0">
                <div id="title-card-3-0" class="title-card">
                  <div className="ptrack-content">
                    <a
                      href="/watch/81224926?tctx=3%2C0%2C%2C%2C%2C%2C%2C%2C"
                      role="link"
                      aria-label="연애의 참견"
                      tabindex="0"
                      aria-hidden="false"
                      class="slider-refocus"
                    >
                      <div className="boxart-size-16x9 boxart-container boxart-rounded">
                        <img
                          className="boxart-image boxart-image-in-padded-container"
                          src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcuQivqjV80EJO5KSXFfoOnKlXnNwmEN_tiNiDKvv4fYFdd8LlEYnkJAelboPe4tbGrSyDyJDFw5NE3KOs1ccC-HDiJ5YKizauWcqbyW7_PtuOwYuaZkVsVcWSgsw6n7HTvmGeXesrKe2zle1s7vMySWfaeRzYzcWzo8XNP25I9uMzSXEdeYZekALvLciBgT2lsmze4ErjeVbbGYuw3MwZVtnAMxCxA6AcV_x4OncGi6K7Tx--op5MXH5sbHZFO-PiGxgVN7LeFY_D-S2gsZqwcgLBS29bLfBIXOpHQMDJZ94LUGs45qYLneuf42dKeev_5cQ6kOvryseMcvJ1dymO1q-TaSCK9_mPlTpU-8JpJ3T-SSu8sr2YLjBa6XODOsAkXhLmowRJfaY-IklOlx8hTG5GYicoswMB_XXDjV4_LWcelD4or1ILz4fYn_9DUa6gF-qG7B.webp?r=b3e"
                          alt=""
                        />
                        <div
                          className="fallback-text-container"
                          aria-hidden="true"
                        >
                          <p className="fallback-text">연애의 참견</p>
                        </div>
                      </div>
                      <div className="click-to-change-JAW-indicator">
                        <div className="bob-jawbone-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon svg-icon-chevron-down"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="bob-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default KoreanDrama;
