import React, {Component} from 'react';
import Style from './style.module.css';

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

            curDay: currentDate.getDate(), //Returns day of the month, don't mismatch with getDay which returns day of the week
            curMoth: currentDate.getMonth(),
            curYear: currentDate.getFullYear()
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
        // setInterval(function(){ alert(new Date().toUTCString()); }, 3000);
        return (
            <div className={Style.container}>
                <h4>Sec: {this.state.curSec}</h4>
                <br/>

                <h4>Min: {this.state.curMin}</h4>
                <br/>

                <h4>Hour: {this.state.curHour}</h4>
                <br/>

                <h4>Day: {this.state.curDay}</h4>
                <br/>

                <h4>Month: {this.state.curMoth}</h4>
                <br/>

                <h4>Year: {this.state.curYear}</h4>
                <br/>
            </div>
        )
    }
}