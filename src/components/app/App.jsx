import React, { useState } from "react";
import Title from "../title/Title";
import Buttons from "../buttons/Buttons";
import Timer from "../timer/Timer";
import SettingsButton from "../settingsButton/SettingsButton";
import Modal from "../modal/Modal";
import { fetchUserConfig, getActiveTimerFromTimers } from "../../functions";
import { TIMERS_INITIAL_STATE } from "../../constants";
import { app } from "./app.module.scss";

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [userConfig, setUserConfig] = useState(fetchUserConfig());
  const [timers, setTimers] = useState([...TIMERS_INITIAL_STATE]);
  const [currentTimer, setCurrentTimer] = useState({
    ...TIMERS_INITIAL_STATE[0],
  });

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  function changeTimer(timerId) {
    const newTimers = timers.map((timer) => {
      timer.id === timerId ? (timer.active = true) : (timer.active = false);
      return timer;
    });

    setTimers(newTimers);
  }

  function saveNewUserConfig(newUserConfig) {
    setUserConfig({ ...newUserConfig });
  }

  return (
    <div className={app}>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        userConfig={userConfig}
        saveUserConfig={saveNewUserConfig}
      />
      <Title currentTimer={getActiveTimerFromTimers(timers)} />
      <Buttons timers={timers} color={userConfig.color} onClick={changeTimer} />
      <Timer
        currentTimer={getActiveTimerFromTimers(timers)}
        userConfig={userConfig}
      />
      <SettingsButton openModal={openModal} />
    </div>
  );
};

export default App;
