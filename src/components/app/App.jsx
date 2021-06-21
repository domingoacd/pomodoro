import React from 'react';
import Title from '../title/Title';
import Buttons from '../buttons/Buttons';
import Timer from '../timer/Timer';
import {app} from './app.module.scss';

const App = (props) => {
    return (<div className={app}>
        <Title text="pomodoro" />
        <Buttons />
        <Timer />
    </div>);
}  

export default App;