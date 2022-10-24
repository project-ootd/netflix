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
import { useState } from "react";
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      {/* <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
      </Modal> */}

      {/* <Header /> */}
      {/* <First /> */}
      {/* <RegForm /> */}
      {/* <Login /> */}
      {/* <Slides /> */}
      {/* <KoreanDrama /> */}
      {/* <TestVideo /> */}
      {/* <Test /> */}
      {/* <KoreanDrama /> */}
      <RankingSlide openModal={openModal} />

      <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
      {/* <SlideVideo /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;
