import "./App.css";

import First from "./components/First";

import { useEffect, useState } from "react";
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

  return (
    <div className="App">
      <First />
    </div>
  );
}

export default App;
