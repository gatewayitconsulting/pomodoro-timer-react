import React, { Component } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default class Timer extends Component {
    
    state = {
        timeRemainingInSeconds: 1500,
        minutes: 25,
        seconds: 0,
        breakMinutes: 5,
        breakSeconds: 0,
        disabled : false,
    }
    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
        })
    }
    startTimer() {
        this.setState(({ minutes, seconds }) => ({ minutes: minutes, seconds: seconds}))
        if (this.state.disabled) {
            return;
        }
        this.setState({disabled: true});
        this.myInterval = setInterval(() => {
            const {  minutes, seconds, breakMinutes, breakSeconds, timeLeft } = this.state
            this.setState(({ timeLeft }) => ({ timeLeft: minutes, seconds}))
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                    this.setState({disabled: false});
                    // if (breakSeconds > 0) {
                    //     this.setState(({ breakSeconds }) => ({
                    //         breakSeconds: breakSeconds - 1
                    //     }))
                    // }
                    // else {
                    //     this.setState(({ breakMinutes }) => ({
                    //         breakMinutes: breakMinutes - 1,
                    //         breakSeconds: 59
                    //     }))
                    // }
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
            if (this.state.timeRemainingInSeconds > 0) {
                this.setState({
                    timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1
                });
                console.log(this.state.timeRemainingInSeconds);
            } else {
                this.setState({
                    timeRemainingInSeconds: 0
                });
            }
        }, 1000)
    }

    pauseTimer() {
        clearInterval(this.myInterval)
        if (!this.state.disabled) {
            return;
        }
        this.setState({disabled: false});
    }

    resetTimer() {
        this.setState(() => ({
            minutes: 25,
            seconds: 0,
            timeRemainingInSeconds: 1500
        }))
        clearInterval(this.myInterval)
        this.setState({disabled: false});
    }

    render() {
        const { minutes, seconds, timeLeft } = this.state;
        return (
            <div id="timer">
                <div className="row">
                    <div className="col-sm-12">
                        { minutes === 0 && seconds === 0
                            ? <h2 className="text-center">Please take a Break!</h2>
                            : <h2 className="text-center">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="countdown-timer">
                            <div className="countdown-timer__circle">
                                <svg>
                                    <circle
                                    r="24"
                                    cx="26"
                                    cy="26"
                                    style={{
                                        animation: `countdown-animation ${this.timeRemainingInSeconds}s linear`
                                    }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-success m-1" type="button" onClick={this.startTimer.bind(this)}
                        disabled={this.state.disabled}>Start Pomodoro</button>
                        <button className="btn btn-info m-1" type="button" onClick={this.pauseTimer.bind(this)}>Pause Pomodoro</button>
                        <button className="btn btn-danger m-1" type="button" onClick={this.resetTimer.bind(this)}>Reset Pomodoro</button>
                    </div>
                </div>
            </div>
        )
    }
}