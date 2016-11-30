import React from "react";
import ReactDOM from "react-dom";


export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }
  //Write a componentDidMount instead of playing with these functions
  
  render() {
    return (
      <div className="background-container">
        <div className="weather-box">
          <div className="title">Your Local Weather</div>
	  <div className="info-box">
            <div>{this.props.name}</div>
	    <div>{this.props.weather}</div>
	    <div>{this.props.temperature}</div>
	  </div>
          <input className="city-input" placeholder="Enter your city..." />
	  <div className="go-btn" onClick={this.props.oC}>Go</div>
        </div>
	<div id="background" className={this.props.weather}></div>
      </div>
    );
  }
}
