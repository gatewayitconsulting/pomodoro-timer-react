import React, { Component } from 'react'

export default class Timer extends Component {
    
    state = {
        minutes: 25,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
        })
    }
    startTimer() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    pauseTimer() {
        clearInterval(this.myInterval)
    }

    resetTimer() {
        this.setState(() => ({
            minutes: 25,
            seconds: 0
        }))
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                <div onClick={this.startTimer.bind(this)}>Start Pomodoro</div>
                <div onClick={this.pauseTimer.bind(this)}>Pause Pomodoro</div>
                <div onClick={this.resetTimer.bind(this)}>Reset Pomodoro</div>
            </div>
        )
    }
}