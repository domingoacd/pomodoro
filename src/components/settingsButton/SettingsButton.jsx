import React from 'react';
import settingsIcon from '../../assets/settings.png';
import styles from './settingsbutton.module.scss';

const SettingsButton = ({openModal}) => {
    return(
        <button className={styles.button} onClick={openModal}>
            <img src={settingsIcon} alt="" /> 
        </button>
    );
}

export default SettingsButton;