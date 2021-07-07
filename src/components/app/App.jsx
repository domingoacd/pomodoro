import React, { useState, useRef } from "react";
import Title from "../title/Title";
import Buttons from "../buttons/Buttons";
import Timer from "../timer/Timer";
import SettingsButton from "../settingsButton/SettingsButton";
import Modal from "../modal/Modal";
import {
  fetchUserConfig,
  saveUserConfig,
  getActiveTimerFromTimers,
  getInitialTime,
  playNotification
} from "../../functions";
import { TIMERS_INITIAL_STATE } from "../../constants";
import { app } from "./app.module.scss";

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [userConfig, setUserConfig] = useState(fetchUserConfig());
  const [timers, setTimers] = useState([...TIMERS_INITIAL_STATE]);
  const [time, setTime] = useState(getInitialTime());
  const [pause, setPause] = useState(false);
  const intervalId = useRef(null);
  const timerIsPaused = useRef(false);
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
    const newTimer = newTimers.find((timer) => timer.id === timerId);
    setTimers(newTimers);
    setTime(`${userConfig[newTimer.id]}:00`);
    clearInterval(intervalId.current);
    intervalId.current = null;
    setPause(false);
  }

  function saveNewUserConfig(newUserConfig) {
    setUserConfig({ ...newUserConfig });
    saveUserConfig({...newUserConfig});
    setTime(getInitialTime());
    clearTimer();
  }

  function startTimer() {
    let currentTimer = timers.find((timer) => timer.active);
    let currentMinutes = userConfig[currentTimer.id];
    let currentSeconds = -1;

    setPause(true);
    
    if (timerIsPaused.current) {
      timerIsPaused.current = false;
    } else {
      const intId = setInterval(() => {

        if (currentMinutes <= 0 && currentSeconds <= 1) {
          clearTimer();
          playNotification(getActiveTimerFromTimers(timers).id);
        }
        if (!timerIsPaused.current) {
          console.log(currentMinutes, currentSeconds)
          if (currentSeconds > 0) {
            currentSeconds = currentSeconds - 1;
            setTime(
              () =>
                `${currentMinutes}:${currentSeconds
                  .toString()
                  .padStart(2, "0")}`
            );
          } else {
            currentSeconds = 59;
            currentMinutes = currentMinutes - 1;
            setTime(() => `${currentMinutes}:${currentSeconds}`);
          }
        }
      }, 1000);

      intervalId.current = intId;
    }
  }

  function pauseTimer() {
    timerIsPaused.current = true;
    setPause(false);
  }

  function clearTimer() {
    clearInterval(intervalId.current);
    setPause(false);
  }
  console.log('running')
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
        pauseTimer={pauseTimer}
        currentTime={time}
        showPauseButton={pause}
      />
      <SettingsButton openModal={openModal} />
    </div>
  );
};

export default App;
