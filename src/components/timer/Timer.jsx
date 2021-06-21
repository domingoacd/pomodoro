import React from "react";
import { timer, timer__inner, time, pause } from "./timer.module.scss";

const Timer = (props) => {
  return (
    <div className={timer}>
      <div className={timer__inner}>
        <span className={time}>17:59</span>
        <button className={pause}>pause</button>
      </div>
    </div>
  );
};

export default Timer;
