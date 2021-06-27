import React from 'react';
import {title} from './title.module.scss';

const Title = ({currentTimer}) => {
    return <h1 className={title}>{currentTimer.name}</h1>
}

export default Title;