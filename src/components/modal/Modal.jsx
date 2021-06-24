import React from "react";
import styles from "./modal.module.scss";
import checkIcon from "../../assets/check.png";
const Modal = ({ showModal, closeModal }) => {
  
    function saveSettings(e) {
        closeModal();
    }  

  return (
    <div className={`${styles.overlay} ${showModal ? styles.show : ""}`}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <span className={styles.modal__title}>Settings</span>{" "}
          <span className={styles.close} onClick={closeModal}>x</span>
        </div>

        <div className={styles.modal_box}>
          <p className={styles.modal_box__title}>time (minutes)</p>
          <div className={styles.options_box}>
            <label htmlFor="" className={styles.options_box__option}>
              <span>pomodoro</span>
              <input type="number" name="" id="" min="0" />
            </label>
            <label htmlFor="" className={styles.options_box__option}>
              <span>short break</span>
              <input type="number" name="" id="" min="0" />
            </label>
            <label htmlFor="" className={styles.options_box__option}>
              <span>long break</span>
              <input type="number" name="" id="" min="0" />
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
              className={`${styles.options_box__color} ${styles.pink} ${styles.active_color}`}
            >
              <img src={checkIcon} alt="" />
            </button>
            <button className={`${styles.options_box__color} ${styles.green}`}>
              <img src={checkIcon} alt="" />
            </button>
            <button className={`${styles.options_box__color} ${styles.blue}`}>
              <img src={checkIcon} alt="" />
            </button>
          </div>
        </div>

        <button className={styles.save_btn} onClick={saveSettings}>Apply</button>
      </div>
    </div>
  );
};

export default Modal;
