import React, { useState } from "react";
import styles, {blue, pink, green} from "./modal.module.scss";
import checkIcon from "../../assets/check.png";
const Modal = ({ showModal, closeModal, userConfig, saveUserConfig }) => {
  const [currentColor, setCurrentColor] = useState(userConfig.color);
  const colorsMapper = {
    blue,
    pink,
    green
  }
  
  function saveSettings(e) {
    const newUserConfig = {...userConfig};
    newUserConfig.color = currentColor;
    saveUserConfig(newUserConfig);
    closeModal();
  }

  return (
    <div className={`${styles.overlay} ${showModal ? styles.show : ""}`}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <span className={styles.modal__title}>Settings</span>{" "}
          <span className={styles.close} onClick={closeModal}>
            x
          </span>
        </div>

        <div className={styles.modal_box}>
          <p className={styles.modal_box__title}>time (minutes)</p>
          <div className={styles.options_box}>
            <label htmlFor="" className={styles.options_box__option}>
              <span>pomodoro</span>
              <input
                type="number"
                name=""
                id=""
                min="0"
                value={userConfig.pomodoro}
              />
            </label>
            <label htmlFor="" className={styles.options_box__option}>
              <span>short break</span>
              <input
                type="number"
                name=""
                id=""
                min="0"
                value={userConfig.short_break}
              />
            </label>
            <label htmlFor="" className={styles.options_box__option}>
              <span>long break</span>
              <input
                type="number"
                name=""
                id=""
                min="0"
                value={userConfig.long_break}
              />
            </label>
          </div>
        </div>

        <div className={styles.modal_box}>
          <p className={styles.modal_box__title}>font</p>
          <div className={styles.options_box}>
            <button
              className={`${styles.options_box__font} ${styles.options_box__active}`}
            >
              <span>Aa</span>
            </button>
            <button className={styles.options_box__font}>
              <span>Aa</span>
            </button>
            <button className={styles.options_box__font}>
              <span>Aa</span>
            </button>
          </div>
        </div>

        <div className={`${styles.modal_box} ${styles.no_border}`}>
          <p className={styles.modal_box__title}>color</p>
          <div className={styles.options_box}>
            <button
              className={`${styles.options_box__color} ${styles.pink} ${
                currentColor === "pink" ? styles.active_color : ""
              }`}
              onClick={() => setCurrentColor('pink')}
            >
              <img src={checkIcon} alt="" />
            </button>
            <button
              className={`${styles.options_box__color} ${styles.green} ${
                currentColor === "green" ? styles.active_color : ""
              }`}
              onClick={() => setCurrentColor('green')}
            >
              <img src={checkIcon} alt="" />
            </button>
            <button
              className={`${styles.options_box__color} ${styles.blue} ${
                currentColor === "blue" ? styles.active_color : ""
              }`}
              onClick={() => setCurrentColor('blue')}
            >
              <img src={checkIcon} alt="" />
            </button>
          </div>
        </div>

        <button className={`${styles.save_btn} ${colorsMapper[userConfig.color]}`} onClick={saveSettings}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Modal;
