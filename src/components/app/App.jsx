import React from 'react';
import Title from '../title/Title';
import {app} from './app.module.scss';

const App = (props) => {
    return (<div className={app}>
        <Title text="title" />
    </div>);
}  

export default App;