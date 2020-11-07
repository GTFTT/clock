import React, {Component} from 'react';
import Style from './style.module.css';

export default class Clock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={Style.container}>
            <h3>Ok, actually it works!</h3>
        </div>
    }
}