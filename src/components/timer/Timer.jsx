import React, { useState } from "react";
import {
  timer,
  timer__inner,
  time,
  toggleTimer,
  blue,
  pink,
  green
} from "./timer.module.scss";

const Timer = ({ currentTimer, userConfig, startTimer, currentTime }) => {
  const [showStartBtn, setShowStartBtn] = useState(true);
  const colorsMapper = {
    blue,
    pink,
    green,
  };

  const runTimer = (e) => {
    setShowStartBtn(false);
    startTimer();
  }

  return (
    <div className={timer}>
      <div className={`${timer__inner} ${colorsMapper[userConfig.color]}`}>
        <span className={time}>{currentTime}</span>
        {showStartBtn ? (
          <button className={`${toggleTimer}`} onClick={runTimer}>
            Start
          </button>
        ) : (
          <button className={toggleTimer}>Pause</button>
        )}
      </div>
    </div>
  );
};

export default Timer;
