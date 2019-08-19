import React, { Component } from "react";
import "./App.css";
import testComponent from "./components/testComponent";

const TestComponent = testComponent;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestComponent name="jaewon" age={24} />
      </div>
    );
  }
}

export default App;
