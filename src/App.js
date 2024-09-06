import React, { Component } from "react";
import "./App.css"; //actualy adds styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 1.6,
      angle: 45,
    };
  }
  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }
  size() {
    //return 200/this.state.height*1.2+15;
    return 250 / this.cv().foot + 10;
  }
  cv() {
    const height = this.state.height;
    const angle = this.state.angle;
    const drc = 0.0174532925; // degree to radian constant
    const angleRad = drc * angle; // radius angle in radian
    const angleBrad = ((180 - angle) / 2) * drc; //reversed angle in radian

    const radius =
      Math.round(
        (height / (2 * (Math.sin(angleRad / 2) * Math.sin(angleRad / 2)))) *
          100,
      ) / 100;
    const length = (height / Math.sin(angleRad / 2)).toFixed(2);
    const foot = (height * Math.tan(angleBrad)).toFixed(2);
    const depth = (radius - radius * Math.sin((90 - angle / 2) * drc)).toFixed(
      2,
    );

    const carr = { radius, length, foot, depth };
    return carr;
  }
  render() {
    //const someStyles = {width: 600};
    const greentTextStyle = { color: "green" };
    const heightStyle = { color: "blue" };
    const footStyle = { color: "purple" };
    const radiusStyle = { color: "orange" };
    const printStyles = { transform: "rotate(180deg)" };
    const rectStyles = {
      fill: "lightgrey",
      strokeWidth: 3,
      stroke: "none",
    };
    const size = this.size();
    const height = this.state.height * size;
    const foot = this.cv().foot * size;
    const radius = this.cv().radius * size;
    return (
      <div className="App">
        <div className="central">
          <div className="experiments" style={printStyles}>
            <svg
              viewBox={"0 0 500 300"}
              height="17em"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect width={foot} height={height} style={rectStyles} />
              <line
                id="newHeight"
                x1="0"
                y1="0"
                x2="0"
                y2={height}
                strokeWidth="8"
                stroke="blue"
              />
              <line
                id="newFoot"
                x1="0"
                y1="0"
                x2={foot}
                y2="0"
                strokeWidth="8"
                stroke="purple"
              />
              <path
                d={
                  "M" +
                  foot +
                  "," +
                  radius +
                  " v-" +
                  radius +
                  " A" +
                  radius +
                  "," +
                  radius +
                  " 0 0,0 0," +
                  height +
                  " z"
                }
                fill="white"
                stroke="black"
                strokeWidth="3"
              />
              <line
                id="newLength"
                x1="0"
                y1={height}
                x2={foot}
                y2="0"
                strokeWidth="2"
                stroke="green"
              />
              <line
                id="redRadius"
                x1={foot}
                y1="0"
                x2={foot}
                y2={radius}
                stroke="orange"
                strokeWidth="3"
              />
              <line
                id="redRadius"
                x1="0"
                y1={height}
                x2={foot}
                y2={radius}
                stroke="orange"
                strokeWidth="3"
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          </div>

          <div className="displayValues">
            <div style={radiusStyle}>
              Radius
              <br /> {this.cv().radius}m
            </div>
            <div style={greentTextStyle}>
              Hypotenuse
              <br /> {this.cv().length}m
            </div>
            <div style={footStyle}>
              Length
              <br /> {this.cv().foot}m
            </div>
          </div>

          <div className="inputs">
            <a className="numbers">Angle</a>
            <input
              name="angle"
              className="numbers"
              type="range"
              min="25"
              max="90"
              step="1"
              onChange={this.handleChange.bind(this)}
              value={this.state.angle}
            />
            <a className="numbers">{this.state.angle}&#176;</a>
          </div>

          <div className="inputs" style={heightStyle}>
            {" "}
            <a className="numbers"> Height </a>
            <input
              name="height"
              type="range"
              min="0.1"
              max="4"
              step="0.1"
              onChange={this.handleChange.bind(this)}
              value={this.state.height}
            />
            <a className="numbers">{this.state.height}m</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
