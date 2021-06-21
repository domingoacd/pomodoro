import React from 'react';
import {buttonsContainer, button, blue, green, pink, active} from './buttons.module.scss';

const Buttons = (props) => {
    

    return(
        <div className={buttonsContainer}>
            <button className={`${button} ${blue} ${active}`}>pomodoro</button>
            <button className={`${button}`}>pomodoro</button>
            <button className={`${button}`}>pomodoro</button>
        </div>
    );
}

export default Buttons;