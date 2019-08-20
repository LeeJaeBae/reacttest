import React, { Component } from "react";

class eventPractice extends Component {
  state = {
    message: "",
    username: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      message: "",
      username: ""
    });
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>EventPractice!!</h1>
        <input
          type="text"
          name="username"
          placeholder="input your name"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="write somthing!"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>enter</button>
      </div>
    );
  }
}

export default eventPractice;
