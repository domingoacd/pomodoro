import React, { useRef } from "react";
import { TIMERS_INITIAL_STATE } from "../../constants";
import {
  buttonsContainer,
  button,
  blue,
  green,
  pink,
  active,
} from "./buttons.module.scss";

const Buttons = ({ timers, color, onClick }) => {
  const colorsMap = useRef({
    blue: blue,
    green: green,
    pink: pink,
  });

  const getButtonFromTimer = (timer) => {
    const classes = `${button} ${
      timer.active ? active + " " + colorsMap.current[color] : ""
    }`;

    return (
      <button key={timer.id} className={classes} onClick={() => onClick(timer.id)}>
        {timer.name}
      </button>
    );
  };

  return (
    <div className={buttonsContainer}>{timers.map(getButtonFromTimer)}</div>
  );
};

export default Buttons;
