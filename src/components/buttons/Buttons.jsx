import React, { useRef } from "react";
import PropTypes from "prop-types";
import { TIMERS_INITIAL_STATE, COLORS } from "../../constants";
import {
  buttonsContainer,
  button,
  blue,
  green,
  pink,
  active,
} from "./buttons.module.scss";

const Buttons = ({ timers, color = "blue", onClick }) => {
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
      <button
        key={timer.id}
        className={classes}
        onClick={() => onClick(timer.id)}
      >
        {timer.name}
      </button>
    );
  };

  return (
    <div className={buttonsContainer}>{timers.map(getButtonFromTimer)}</div>
  );
};

Buttons.propTypes = {
  timers: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.oneOf([...COLORS]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
