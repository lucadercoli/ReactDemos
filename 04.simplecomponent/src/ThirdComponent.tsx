import React, { Component } from "react";

interface ThirdComponentProps {
  name: string;
  children: React.ReactNode; // 👈️ added type for children
  onClick: () => void;
  onMessage: (msg: string) => void;
}

export default class ThirdComponent extends Component<
  ThirdComponentProps,
  any
> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.props.children}</h2>
        <button onClick={this.props.onClick}>Click me!</button>
        <button onClick={() => this.props.onMessage("il messaggio!")}>
          Click for the message!
        </button>
      </div>
    );
  }
}
