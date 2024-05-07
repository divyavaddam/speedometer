// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

   onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return null // Return null to indicate no state change
    })
  }

  onApplyBrake = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return null // Return null to indicate no state change
    })
  }
  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="content">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img"
            alt="speedometer"
          />
          <h1 className="sub-heading">Speed is {speed}mph</h1>
          <p className="speed">Min limit is 0mph, Max limit is 200mph</p>
          <div>
            <button
              className="button-1"
              onClick={this.onAccelerate}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="button-2"
              onClick={this.onApplyBrake}
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
