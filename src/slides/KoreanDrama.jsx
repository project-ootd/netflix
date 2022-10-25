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
    <>
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
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTY8O3lhGydbqNCkwj4stCiwxwEfPaZ_wMPF8lx9ONQXoSdv_rKI9gPEyFNKT6QUAk7CfhvJqnkgORbNnm32XDMI6TyAACC27LQ.webp?r=586"
                alt=""
              />
            </a>
          </div>

          {/* 2번째 */}
          <div className="korean-drama kd-2">
            <a
              href="/watch/81323551?tctx=4%2C1%2C%2C%2C%2C%2C%2C%2C"
              // role="link"
              // aria-label="경이로운 소문"
              // tabindex="0"
              // aria-hidden="false"
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
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcAH-3_UMnWfbFybB4sP7Avj7F7m_rOLx-7n63fRphv8W1Vm3SS9n0oqgB2YsSh3mJCGAjB2ZtJInuEP4yttEoUx39ub5mx-7nw.webp?r=6da"
                alt=""
              />
            </a>
          </div>

          {/* 4번째 */}

          <div className="korean-drama kd-4">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUab2UjAb9h4rRmwo0RcR2nvqo396lNduRpCbbiBmGWTJa5qYIx6AQdyv8yx8pSK2QrG2XkaNyYc0T5Xf_THqwBXwVzdA718tPE.webp?r=f58"
                alt=""
              />
            </a>
          </div>

          {/* 5번째 */}
          <div className="korean-drama kd-5">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXgFqGzU2kSu28PBd4ujx9TTmJ8et6lC9kLdSugl7U_alWBaSBKho91A5mAE-Yv4DX63RWw_Wh2sUAjZr1RQGUbcrOD6Q1M9nwI.webp?r=bd3"
                alt=""
              />
            </a>
          </div>

          {/* 6번째 */}
          <div className="korean-drama kd-6">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSFJ_-1_1sa9kgKZYbujJ2rnoGWBlS8HKGiG-lNNDgQm7SkXh6oOvwRCpNtt7dfB6xlWir00J7DIwXJRsojaMjxU-xToUc8glAI.webp?r=e4c"
                alt=""
              />
            </a>
          </div>

          {/* 7번째 */}
          <div className="korean-drama kd-7">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU8i3_FVcBdHgNQUGNAhqEPSylZ_nzKXUphSXC9roSkNS2TpmTPpJwqJPI6DbnpXWicQToJYKlsR3-8yWYS12z_8XcHd1YXMqkU.webp?r=ebb"
                alt=""
              />
            </a>
          </div>

          {/* 8번째 */}
          <div className="korean-drama kd-8">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaXfhtqgWbbHeyNmqtJT-jMnmXrhzcHXzxOelsFTrARxMOgKXKpn51fDUoju9aOa5KmT2iMrycOCuH26YevH7FzAeIFzaY6N3L4.webp?r=f17"
                alt=""
              />
            </a>
          </div>

          {/* 9번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdXZwM28pH9FSEeMQP3IHzz2z2uqtvGCJSo-CCBOsihQap4vBsRDoV_OTBnzPKyKk_qbCKvrNg__aS66hI0hv0W25bVyTm1rrqI.webp?r=f16"
                alt=""
              />
            </a>
          </div>
          {/* 10번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZBrfgut-7YuCNOdGbNcr9bic_TFKh2cQLiGDld56xJSAJAX-QLYl8qGUb9ubZTjcSzQluYm_cl82grmLs8kphTiJvmrSbFxz84.webp?r=05c"
                alt=""
              />
            </a>
          </div>

          {/* 11번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZeJQp-ZQQ6BQlAd518CvJr6tHKHCWX5cn500lm27544xbH6SAmB6p44cfKuIjYrupmb8Orhp-2clkNz9edu2Qb8GKEI9FP5GeE.webp?r=f76"
                alt=""
              />
            </a>
          </div>

          {/* 12번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc6YjKzS6YFuGpZmIJA-4pCjpvRj3Jyxn6NIFt2n7O8aJLhbMDa8hOrsszt3YFOz5BQgdryyVLv7HR7ZiDM7eY29yqB2VpiAmqVcIhLWpXkYajREsYpFxZ6oUnkr1Wiuebgn.jpg?r=aaa"
                alt=""
              />
            </a>
          </div>
        </Slider>
      </div>

      <div className="korean-drama-slide">
        <div className="korean-drama-text flex flex_jc_start">
          <a href="#">
            <div className="korean-drama-text1">
              지금 뜨는 콘텐츠
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
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcuQivqjV80EJO5KSXFfoOnKlXnNwmEN_tiNiDKvv4fYFdd8LlEYnkJAelboPe4tbGrSyDyJDFw5NE3KOs1ccC-HDiJ5YKizauWcqbyW7_PtuOwYuaZkVsVcWSgsw6n7HTvmGeXesrKe2zle1s7vMySWfaeRzYzcWzo8XNP25I9uMzSXEdeYZekALvLciBgT2lsmze4ErjeVbbGYuw3MwZVtnAMxCxA6AcV_x4OncGi6K7Tx--op5MXH5sbHZFO-PiGxgVN7LeFY_D-S2gsZqwcgLBS29bLfBIXOpHQMDJZ94LUGs45qYLneuf42dKeev_5cQ6kOvryseMcvJ1dymO1q-TaSCK9_mPlTpU-8JpJ3T-SSu8sr2YLjBa6XODOsAkXhLmowRJfaY-IklOlx8hTG5GYicoswMB_XXDjV4_LWcelD4or1ILz4fYn_9DUa6gF-qG7B.webp?r=b3e"
                alt=""
              />
            </a>
          </div>

          {/* 2번째 */}
          <div className="korean-drama kd-2">
            <a
              href="#"
              // role="link"
              // aria-label="경이로운 소문"
              // tabindex="0"
              // aria-hidden="false"
              className="slider-refocus"
            >
              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                <img
                  className="kDramaThumbnail"
                  src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSP9LjKOjeADw7ATHNWbMhASmaVmvxtyIi6ci9sEJ2vGYZwef_EzF-A1tZnXy8COfjBhUZ3lO9VM4gaOJ822BLnZxZ5l_qLLko2Fg8gNEBwgkwZLTCsQOFpztqDDXw9G5XkcQ6-lxMAEqmr2jklyG3Cl-alYQlTgnhg.webp?r=e93"
                  alt=""
                />
              </div>
            </a>
          </div>

          {/* 3번째 */}
          <div className="korean-drama kd-3">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSJkMhrfUhW4pGxoHipuKh1gxB28X_R4V1iUgLcNJg0GlPgWputvEgkXSu20kDJ7FKe8HsQxVkhJ8SXbNFGrrMEICWBxiM02HungUM7XZ3sN4eGETtchVGLnZssu3rd03_Y73d5W-DIroJtR2oqrAOizfcZGKGvGjYBS3C0d2FjAZA61TINn1v3SXEz_gPmRD3WE8g-UiZlSGzpGFXTnkDhD06tkIIO_huvp9HkgMUK8MzIMyanExNVKOwWoenZcSr_Yqzqsu1o96bd04Z3Z_AbfK-ZydaWOZ3H6HBfQ08DcRMxfsZ5CKQcF6EVsEe6W0xQw3rElFCMobsGeWBzMEIEhmJ3mjxTdu-E6aoekum4beXaqntVog4DXJ-AcnIt9ey3oL0d3292ck3TcGM1TV9gNB2SlN-Q55ZGm-VzrvVONALCbjxS1uS3yoUysQLpHQzM4uETc.webp?r=dd3"
                alt=""
              />
            </a>
          </div>

          {/* 4번째 */}

          <div className="korean-drama kd-4">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaXfhtqgWbbHeyNmqtJT-jMnmXrhzcHXzxOelsFTrARxMOgKXKpn51fDUoju9aOa5KmT2iMrycOCuH26YevH7FzAeIFzaY6N3L4.webp?r=f17"
                alt=""
              />
            </a>
          </div>

          {/* 5번째 */}
          <div className="korean-drama kd-5">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT02nVcbc3sB2mz3LzS_rnE2H5jf2ZvXKxvKaIdg0ZlccG2sC7fwknpNHV30VpvOAjYX5Q3m0LIdbdilkBshHNbHtvKxnoDrbonIn4xcRTul2q2hWGfhUuePpBsIqbcSzOrV5p1WaHvc09QlN0-d4_Bqnr75kRpb6frfuGxYCGxyYIufK-f3eOin86uTtbsFyKs78GokrlvVYMcgfSQCZgMI2EgDvnFPjoKL9woMDAstjCpOUy7PzvclCtBLZfxEQbgGvtsycNkuDYaiTv8gxVwbUtCZOtUYv3jWetZ6gUs1N0UBK29yCwMRSUtRef4fSeRMETvzo6xc52hJcluh6r_f211Ytq69DSGkwY5vraU-y6zMkpdpyuSkCMiRhNcve0IkOPV85LzkjGKmcn_aTtVfc9FUuBRkw5FP1jqRLhiEMIYiBYHUF3Mful6FlaVc-iZ9I62A.webp?r=224"
                alt=""
              />
            </a>
          </div>

          {/* 6번째 */}
          <div className="korean-drama kd-6">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXcZAUzcCbDkYlgQ1oZRQihwIEQlozdz72GjyGqIboLBJQ6fDpnQFm56-EFwfYVfs-7Z0QIMOxxj_FJAhwvtUe9Q6SPqT1HFUO4aoznaMYVbA_y9v1IUN04ewK-E2jU7Lw3E.jpg?r=ae0"
                alt=""
              />
            </a>
          </div>

          {/* 7번째 */}
          <div className="korean-drama kd-7">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdqdEqr3bF-kzE9E5Zn6NTBiVqoXfHCT1bJjzYeH3EOy6e1L69D8zqsRgkhRtYAU__byug06z8-WujE90czrXeZ8PULuwni3odDVrl6U5RTpemVM_61bXHqBe9Boh0wCGm5sPzty37G1eXUK658mSY41VA0sUNHHtw8.webp?r=40c"
                alt=""
              />
            </a>
          </div>

          {/* 8번째 */}
          <div className="korean-drama kd-8">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSjq2ODJ5CA-jUjyOxC4r3CUNu4Mc76FZUMyUVpFF1cMR5428Q_LxfptgjkOXk7BnHdoPC8AIjpxWYFj9Q81mE5Xth50lR1v6n9TzBMNBpxywuMHgdOnk4j0-iJUCHJEKKA1fuGdrZ-OuNYyOj_oRrTIn-QfPk0DBr2eZjyDsI2mFIneRX_Sxepuxw74nx7mZmOwLOYfIejxsHcBXiYC20CTQfrmRXbuU8ahBEDvGL7ll9dHQXLHzKA8fR1fR5FQoOs2dv1qzoWo6fi7mwuroZsFypJ16ehG-lI1dNxBZ9qv9s4x-DHLfR9F6vXBYEvCJrgiwCn3_wTa1AzUpzPY-dtyVljt20EKosBy5mAx4WDf6dhnNG_8gce5UBV2nucdNHNNWyhTkwAzcXCsemzUJDh22oz-jv6p0_Ps8ucjXnJvrH7VfU8SDTgn67EzOURcrrH3VB5o.webp?r=754"
                alt=""
              />
            </a>
          </div>

          {/* 9번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdXZwM28pH9FSEeMQP3IHzz2z2uqtvGCJSo-CCBOsihQap4vBsRDoV_OTBnzPKyKk_qbCKvrNg__aS66hI0hv0W25bVyTm1rrqI.webp?r=f16"
                alt=""
              />
            </a>
          </div>

          {/* 10번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYV2Vmotval8G_iYY5wa5VMAkXF4fznh7Ey1LDdmUHwdExZpbN_pCrCJfrQ7uNVA87udpC38dKvBDCGo2Kd_0vN-ya0UX1uaGOnlqe2QMOlxD6d8lSNgzEy3whyM6NFh9XFe.jpg?r=d02"
                alt=""
              />
            </a>
          </div>

          {/* 11번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUHZBYwy12VG-O4j63uk3qvryZ9KPzGMifc6svHVvwTdZcKA4WKj-VCbJBFp7wxkrzktGlZCMAH8BOgHz15M_pwEKb9EIBh5YyIED6Nc9QxQ1fHgcKO5EvC3k7Jd-9xjvMRp99M8I6wAyGBA3Cp9p_3TCzB7SJym1BE.webp?r=855"
                alt=""
              />
            </a>
          </div>

          {/* 12번째 */}
          <div className="korean-drama kd-9">
            <a href="#" className="slider-refocus">
              <img
                className="kDramaThumbnail"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUbf7Zp8as8_3lcxD0iVTIN8SEBlpB_vgxI2yEsYFR-b2JYr7HNU_qySrY2zKrG8aZo4o1NpkrkaAO9mhrfkZw8kqH3yThoDGEgllEguO1ndDqNIHkX05sDCn7KpebFbAobo.jpg?r=de7"
                alt=""
              />
            </a>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default KoreanDrama;
