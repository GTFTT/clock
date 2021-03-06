/*This module shows current time and date*/

import React, {useState, useRef, Component} from 'react';
import Style from './style.module.css';

export default class Display extends Component {
    constructor(props) {
        super(props);

        // Init state
        const currentDate = new Date();
        this.state = {
            currentTime: new Date().toUTCString(),
            curSec: currentDate.getSeconds(),
            curMin: currentDate.getMinutes(),
            curHour: currentDate.getHours(),

            curDay: currentDate.getDate(), //Returns day of the month, don't mismatch with getDay which returns day of the week
            curMoth: currentDate.getMonth(),
            curYear: currentDate.getFullYear(),
        }

        //Update state every one second
        setInterval((function() {
            const currentDate = new Date();
            this.setState({
                curSec: currentDate.getSeconds(),
                curMin: currentDate.getMinutes(),
                curHour: currentDate.getHours(),
    
                curDay: currentDate.getDate(), //Returns day of the month, don't mismatch with getDay which returns day of the week
                curMoth: currentDate.getMonth(),
                curYear: currentDate.getFullYear()
            });
        }).bind(this), 1000);
    }

    render() {
        const {curHour, curMin, curSec, curDay, curMoth, curYear } = this.state;
        return (
            <div className={Style.container}>
                <div className={Style.textCont}>
                    <h5 className={Style.time}>{curHour}:{curMin}:{curSec}</h5>
                    <h5 className={Style.date}>{curDay}/{curMoth}/{curYear}</h5>
                </div>
            </div>
        );
    }
}