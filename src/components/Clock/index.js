import React, {Component} from 'react';
import Style from './style.module.css';
import Display from '../Display';
import ClockCicle from '../ClockCircle';

export default class Clock extends Component {
    constructor(props) {
        super(props);

        //Init state
        const currentDate = new Date();
        this.state = {
            currentTime: new Date().toUTCString(),
            curSec: currentDate.getSeconds(),
            curMin: currentDate.getMinutes(),
            curHour: currentDate.getHours(),
        }

        //Update state every one second
        setInterval((function() {
            const currentDate = new Date();
            this.setState({
                curSec: currentDate.getSeconds(),
                curMin: currentDate.getMinutes(),
                curHour: currentDate.getHours(),
            });
        }).bind(this), 1000);
        //TODO Very important!!! of 'hours' stage you have to change range from 1-59 to 1-12
    }

    render() {
        
        return (
            <div className={Style.container}>

                <div className={`${Style.thirdStage} ${Style.contCommon}`}>
                    <ClockCicle func={() => {return this.state.curHour}} keyId={1} backColor={"#111"}></ClockCicle>
                </div>

                <div className={`${Style.secondStage} ${Style.contCommon}`}>
                    <ClockCicle func={() => {return this.state.curMin}} keyId={2} backColor={"#222"}></ClockCicle>
                </div>

                <div className={`${Style.firstStage} ${Style.contCommon}`}>
                    <ClockCicle func={() => {return this.state.curSec}} keyId={3} backColor={"#333"}></ClockCicle>
                </div>

                <div className={`${Style.displayCont} ${Style.contCommon}`}>
                    <Display></Display>
                </div>
            </div>
        )
    }
}