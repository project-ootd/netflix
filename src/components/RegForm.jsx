import React from "react";
import logo from "../img/logo.png";
import "../styles/RegForm.css";

const RegForm = () => {
  return (
    <div style={{ background: "#f3f3f3" }}>
      <div className="regForm_top_wrap flex flex_jc_sb">
        <a href="/" className="logo img_box">
          <img src={logo} alt="LOGO" />
        </a>

        <a href="/login" className="login flex flex_ai_c">
          로그인
        </a>
      </div>

      <div className="contain_wrap">
        <div className="contain_box">
          <p>1/3단계</p>
          <h1>비밀번호를 설정해 멤버십을 시작하세요.</h1>
          <div className="contain_text">
            몇 단계만 더 거치면 넷플릭스 가입 완료 ! <br />
            복잡한 단계는 모두 없앴습니다.
          </div>
          <form
            method="post"
            className="login_form"
            action="http://localhost:8084/login_form"
          >
            <input
              type="text"
              placeholder="이메일 주소"
              className="email"
              name="email"
              id="email"
            />
            <input
              type="text"
              placeholder="비밀번호를 추가하세요"
              className="pw"
              name="pw"
              id="pw"
            />
            <div className="check_box_wrap">
              <div className="check_box1 flex flex_jc_c">
                <input
                  type="checkbox"
                  className="checkBox1"
                  id="checkBox1"
                  name="checkBox1"
                />
                <label for="checkBox1"></label>
                <div className="check_text1">
                  예, 저는 <a href="#">개인정보 처리방침</a>에 따른 개인정보
                  수집 및 활용에 동의합니다.
                </div>
              </div>
              <div className="check_box2 flex flex_jc_c">
                <input
                  type="checkbox"
                  className="checkBox2"
                  id="checkBox2"
                  name="checkBox2"
                />
                <label for="checkBox2"></label>
                <div className="check_text2">
                  예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)
                </div>
              </div>
            </div>
            <button className="submit_btn">동의하고 계속</button>
          </form>
        </div>
      </div>

      <div className="regForm_footer_wrap">
        <div className="footer_box flex flex_jc_start">
          <div className="footer_text">
            <h4>질문이 있으신가요? 문의 전화: 010-1234-1234</h4>
            <ul className="item_box flex">
              <li className="footer_item">
                <a href="/">자주 묻는 질문</a>
              </li>
              <li className="footer_item">
                <a href="/">고객 센터</a>
              </li>
              <li className="footer_item">
                <a href="/">이용 약관</a>
              </li>
              <li className="footer_item">
                <a href="/">개인정보</a>
              </li>
              <li className="footer_item">
                <a href="/">쿠키 설정</a>
              </li>
              <li className="footer_item">
                <a href="/">회사 정보</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy_right_box">
          <div className="language">
            {/* <div className="test_icon"></div> */}
            <select name="language" id="language" className="test_icon">
              <option value="Korea">
                {/* <img src={earth} style={{ width: "10px", height: "10px" }} /> */}
                {/* <IoEarthOutline style={{ color: "red" }} /> */}
                한국어
              </option>
              <option value="English">English</option>
            </select>
          </div>
          <div className="text">
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호: 080-001-9587
            <br />
            대표: 레지널드 숀 톰프슨 <br />
            이메일 주소: korea@netflix.com 주소: 대한민국 서울특별시 종로구
            우정국로 26, 센트로폴리스 A동 20층 우편번호 03161 <br />
            사업자등록번호: 165-87-00119 <br />
            클라우드 호스팅: Amazon Web Services Inc. <br />
            공정거래위원회 웹사이트
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
