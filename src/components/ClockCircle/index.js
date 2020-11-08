/*This is animated module which show circle with arrow on it*/

import React, {Component} from 'react';
import anime from 'animejs/lib/anime.es.js';
import Style from './style.module.css';

export default class ClockCircle extends Component {
    constructor(props) {
        super(props);
        const {func, keyId} = props;

        //Generate unique key for my component(used for animating)
        this.id = "circle_"+keyId;
        
        //Init
        this.state = {
            deg: ((func()*360) / 59)
        }

        //Update state every second to make animaion real
        this.intervalId = setInterval((() => {
            this.setState({deg: Math.round((func()*360) / 59)});
        }).bind(this), 1000);

    }

    componentDidMount() {
        this.runAnimation(this.state.deg);
    }

    componentDidUpdate() {
        this.runAnimation(this.state.deg);
    }

    //There magic of motion comes true, this method runs motion animation
    runAnimation(deg) {
        anime.set(`#${this.id}`, {
            rotate: deg, 
        });
        // anime({
        //     targets: `#${this.id}`,
        //     rotate: deg,

        //     easing: 'linear',
        //     duration: 2000,
        //     loop: true,
        // });
    }

    componentWillUnmount() {
        //Remove interval timer when component is destroued to prevent memory leak
        clearImmediate(this.intervalId);
    }

    render() {
        //We can customize backgrounf color
        const {backColor} = this.props;

        return (
            <div id={this.id} className={Style.container} style={{backgroundColor: backColor}}>
                <div className={Style.point}></div>
            </div>
        );
    }
}