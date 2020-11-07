import React, { Component } from 'react';
import Style from './App.module.css';
import Clock from './components/clock';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={Style.mainContainer}>
            <Clock />
        </div>
    }
}

export default App;