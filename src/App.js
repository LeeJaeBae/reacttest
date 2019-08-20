import React, { Component } from "react";
import "./css/App.css";
import testComponent from "./components/testComponent";
import eventPractice from "./components/eventPractice";
import validationSample from "./components/validationSample";
import scrollBox from "./components/scrollBox";
import interationSample from "./components/interationSample";

const TestComponent = testComponent;
const EventPractice = eventPractice;
const ValidationSample = validationSample;
const Scrollbox = scrollBox;
const InterationSample = interationSample;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestComponent name="jaewon" age={24} />
        <EventPractice />
        <ValidationSample />
        <Scrollbox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          To bottom
        </button>
        <InterationSample />
      </div>
    );
  }
}

export default App;
