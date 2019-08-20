import React, { Component } from "react";
import "../css/validationSample.css";

class validationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.focus();
    this.setState({
      password: ""
    });
  };
  handelKeyPress = e => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };
  render() {
    return (
      <div>
        <input
          ref={ref => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          onKeyPress={this.handelKeyPress}
        />
        <button onClick={this.handleButtonClick}>check</button>
      </div>
    );
  }
}

export default validationSample;
