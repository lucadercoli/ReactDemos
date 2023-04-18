import React, { Component } from "react";

class SecondComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

export default SecondComponent;
