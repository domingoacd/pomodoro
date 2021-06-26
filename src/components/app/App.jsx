import React, { useState } from "react";
import Title from "../title/Title";
import Buttons from "../buttons/Buttons";
import Timer from "../timer/Timer";
import SettingsButton from "../settingsButton/SettingsButton";
import Modal from "../modal/Modal";
import { fetchUserConfig } from "../../functions";
import { app } from "./app.module.scss";

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [userConfig, setUserConfig] = useState(fetchUserConfig());

  console.log(userConfig);
  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  return (
    <div className={app}>
      <Modal showModal={showModal} closeModal={closeModal} />
      <Title text="pomodoro" />
      <Buttons />
      <Timer />
      <SettingsButton openModal={openModal} />
    </div>
  );
};

export default App;
