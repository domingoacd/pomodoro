import React from 'react';
import {title} from './title.module.scss';

const Title = ({text}) => {
    return <h1 className={title}>{text}</h1>
}

export default Title;