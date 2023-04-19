import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LifecycleComponent from "./LifecycleComponent";
import OldLifecycleComponent from "./OldLifecycleComponent";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { userName: "Mario", unmount: false };
  }

  toggleUserName = () => {
    const newValue = this.state.userName === "Mario" ? "Alessandro" : "Mario";
    this.setState((prevState: any) => {
      return { userName: newValue };
    });
  };

  toggleComponent = () => {
    this.setState((prevState: any) => {
      return { unmount: !this.state.unmount };
    });
  };

  render() {
    const lifecycleComp = !this.state.unmount && (
      <LifecycleComponent name={this.state.userName}></LifecycleComponent>
    );

    const oldLifecycleComp = !this.state.unmount && (
      <OldLifecycleComponent name={this.state.userName}></OldLifecycleComponent>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            style={{ backgroundColor: "red" }}
            onClick={this.toggleComponent}
          >
            Toggle Component
          </button>
          {/* {lifecycleComp} */}
          {oldLifecycleComp}
          <button onClick={this.toggleUserName}>Switch User</button>
        </header>
      </div>
    );
  }
}

export default App;
