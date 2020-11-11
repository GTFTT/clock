/*This is animated module which show circle with arrow on it*/

import React, {Component} from 'react';
import anime from 'animejs/lib/anime.es.js';
import Style from './style.module.css';

export default class ClockCircle extends Component {
    constructor(props) {
        super(props);
        const {func, keyId, fromRangeMin, fromRangeMax} = props;

        //Generate unique key for my component(used for animating)
        this.id = "circle_"+keyId;
        
        //Init
        this.state = {
            deg: this.calculateDeg(fromRangeMin, fromRangeMax, func)
        }

        //Update state every second to make animaion real
        this.intervalId = setInterval((() => {
            const deg = this.calculateDeg(fromRangeMin, fromRangeMax, func);
            this.setState({deg: deg});
        }).bind(this), 1000);

    }

    calculateDeg(fromRangeMin, fromRangeMax, func) {
        //Validate source range
        if(!fromRangeMin) fromRangeMin = 0;
        if(!fromRangeMax) fromRangeMax = 59;

        const fromRange = (fromRangeMax - fromRangeMin)  
        const deg = (((func() - fromRangeMin) * 360) / fromRange);
        return deg;
    }

    componentDidMount() {
        this.runAnimation(this.state.deg);
    }

    componentDidUpdate() {
        this.runAnimation(this.state.deg);
    }

    //There magic of motion comes true, this method runs motion animation
    runAnimation(deg) {
        // anime.set(`#${this.id}`, {
        //     rotate: 1, 
        // });
        anime({
            targets: `#${this.id}`,
            rotate: deg,
            easing: 'spring(1, 80, 10, 0)',
            duration: 2000,
            loop: true,
        });
    }

    componentWillUnmount() {
        //Remove interval timer when component is destroued to prevent memory leak
        clearImmediate(this.intervalId);
    }

    render() {
        //We can customize backgrounf color
        const {style} = this.props;

        return (
            <div id={this.id} className={Style.container} style={style}>
                <div className={Style.point}></div>
            </div>
        );
    }
}