import React, { Component } from 'react';
import Style from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={Style.mainContainer}>Hello word!!!</div>
    }
}

export default App;