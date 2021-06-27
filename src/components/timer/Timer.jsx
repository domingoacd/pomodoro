import React from "react";
import { timer, timer__inner, time, pause, blue, pink, green } from "./timer.module.scss";

const Timer = ({currentTimer, userConfig}) => {
  const colorsMapper = {
    blue,
    pink,
    green
  }
  return (
    <div className={timer}>
      <div className={`${timer__inner} ${colorsMapper[userConfig.color]}`}>
        <span className={time}>{userConfig[currentTimer.id] + ' : 00'}</span>
        <button className={pause}>Start</button>
      </div>
    </div>
  );
};

export default Timer;
