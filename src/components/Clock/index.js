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
    }

    render() {
        
        return (
            <div className={Style.container}>

                <div className={`${Style.thirdStage} ${Style.contCommon}`}>
                    <ClockCicle func={() => {return this.state.curHour}} fromRangeMax={23} keyId={1} style={{backgroundColor:"#111", background: "linear-gradient(17deg, rgba(82,82,82,1) 0%, rgba(30,32,30,1) 100%)",  border: '2px solid blue'}}></ClockCicle>
                </div>

                <div className={`${Style.secondStage} ${Style.contCommon}`}>
                    <ClockCicle func={() => {return this.state.curMin}} keyId={2} style={{backgroundColor:"#222", background: "linear-gradient(17deg, rgba(0,0,0,1) 0%, rgba(60,62,60,1) 100%)",  border: '2px solid green'}}></ClockCicle>
                </div>

                <div className={`${Style.firstStage} ${Style.contCommon}`}>
                    <ClockCicle func={() => {return this.state.curSec}} keyId={3} style={{backgroundColor:"#123",background: "linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(40,42,40,1) 100%)",  border: '2px solid white'}}></ClockCicle>
                </div>

                <div className={`${Style.displayCont} ${Style.contCommon}`}>
                    <Display></Display>
                </div>
            </div>
        )
    }
}