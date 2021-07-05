import React, { useState } from "react";
import Title from "../title/Title";
import Buttons from "../buttons/Buttons";
import Timer from "../timer/Timer";
import SettingsButton from "../settingsButton/SettingsButton";
import Modal from "../modal/Modal";
import {
  fetchUserConfig,
  getActiveTimerFromTimers,
  getInitialTime,
} from "../../functions";
import { TIMERS_INITIAL_STATE } from "../../constants";
import { app } from "./app.module.scss";

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [userConfig, setUserConfig] = useState(fetchUserConfig());
  const [timers, setTimers] = useState([...TIMERS_INITIAL_STATE]);
  const [time, setTime] = useState(getInitialTime());
  const [intervalId, setIntervalId] = useState(null);
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

  function startTimer() {
    let currentTimer = timers.find((timer) => timer.active);
    let currentMinutes = userConfig[currentTimer.id];
    let currentSeconds = -1;

    const intId = setInterval(() => {
      if (currentSeconds > 0) {
        currentSeconds = currentSeconds - 1;
        setTime(
          () =>
            `${currentMinutes}:${
              currentSeconds.toString().length < 2
                ? "0" + currentSeconds
                : currentSeconds
            }`
        );
      } else {
        currentSeconds = 59;
        currentMinutes = currentMinutes - 1;
        setTime(() => `${currentMinutes}:${currentSeconds}`);
      }
    }, 1000);

    setIntervalId(intId);
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
        startTimer={startTimer}
        currentTime={time}
      />
      <SettingsButton openModal={openModal} />
    </div>
  );
};

export default App;
