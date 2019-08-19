import React, { Component } from "react";
import PropTypes from "prop-types";

class testComponent extends Component {
  static defaultProps = {
    name: "test name"
  };
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  };
  state = {
    number: 0
  };
  render() {
    return (
      <div>
        <p>Hello my name is {this.props.name}.</p>
        <p>and I'm {this.props.age} years old.</p>
        <p>number: {this.state.number}</p>
        <button
          onClick={() =>
            this.setState({
              number: this.state.number + 1
            })
          }
        >
          Plus
        </button>
      </div>
    );
  }
}

export default testComponent;
