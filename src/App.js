import "./App.css";
import TestVideo from "./components/TestVideo";
import First from "./components/First";
import Header from "./components/Header";
import Login from "./components/Login";
import RankingSlide from "./components/RankingSlide";
import Slides from "./components/Slides";
import RegForm from "./components/RegForm";
import KoreanDrama from "./slides/KoreanDrama";
import SlideVideo from "./components/SlideVideo";
import Test from "./slides/Test";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import ChoiceProfile from "./components/ChoiceProfile";
import axios from "axios";
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(async () => {
    const data = axios({
      url: "http://localhost:8084/login",
      method: "GET",
    });

    data();
  }, []);
  //san-tiger.tistory.com/entry/개발환경-Spring-bootReact-연동하기 [SanStory:티스토리]

  출처: https: return (
    <div className="App">
      {/* <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
      </Modal> */}

      <Header />
      {/* <ChoiceProfile /> */}
      {/* <First /> */}
      {/* <RegForm /> */}
      {/* <Login /> */}
      {/* <Slides /> */}
      {/* <KoreanDrama /> */}

      <TestVideo />
      {/* <Test /> */}
      <RankingSlide openModal={openModal} />
      <KoreanDrama />

      <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
      {/* <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
      <SlideVideo /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;
