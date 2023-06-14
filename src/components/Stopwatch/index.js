import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {mintues: 0, seconds: 0}

  timerStart = () => {
    const {mintues, seconds} = this.state
    let timerSec = seconds
    let timerMin = mintues

    this.timerId = setInterval(() => {
      timerSec += 1
      if (timerSec === 60) {
        timerSec = 0
        timerMin += 1
        this.setState({seconds: 0, mintues: timerMin})
      } else {
        this.setState({seconds: timerSec})
      }
    }, 1000)
  }

  timerReset = () => {
    clearInterval(this.timerId)
    this.setState({mintues: 0, seconds: 0})
  }

  timerStop = () => {
    clearInterval(this.timerId)
  }

  render() {
    const {mintues, seconds} = this.state

    const displayMin = mintues > 9 ? mintues : `0${mintues}`
    const displaySec = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="bg-container">
        <div className="timer-container">
          <h1>Stopwatch</h1>
          <div className="timer-sub-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1 className="timer">
              {displayMin}:{displaySec}
            </h1>
            <div className="button-conatiner">
              <button
                type="button"
                className="start-button"
                onClick={this.timerStart}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button"
                onClick={this.timerStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.timerReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
