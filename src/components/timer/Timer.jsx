import React, { useState } from "react";
import {
  timer,
  timer__inner,
  time,
  toggleTimer,
  blue,
  pink,
  green,
} from "./timer.module.scss";

const Timer = ({
  userConfig,
  startTimer,
  pauseTimer,
  currentTime,
  showPauseButton,
}) => {
  const [showStartBtn, setShowStartBtn] = useState(true);
  const colorsMapper = {
    blue,
    pink,
    green,
  };

  const runTimer = (e) => {
    startTimer();
  };

  const stopTimer = (e) => {
    pauseTimer();
  };

  console.log(userConfig)
  return (
    <div className={timer}>
      <div className={`${timer__inner} ${colorsMapper[userConfig.color]}`}>
        <span className={time}>{currentTime}</span>
        {showPauseButton ? (
          <button className={toggleTimer} onClick={stopTimer}>
            Pause
          </button>
        ) : (
          <button className={`${toggleTimer}`} onClick={runTimer}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
