import React, { Component } from "react";

export default class LifecycleComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { company: "iCubed" };
  }

  toggleCompany = () => {
    const newValue = this.state.company === "iCubed" ? "ZeusLab" : "iCubed";
    this.setState((prevState: any) => {
      return { company: newValue };
    });
  };

  render() {
    return (
      <div>
        <h1>=== NEW LIFECYCLE ===</h1>
        <h3>
          Hello {this.props.name} from {this.state.company}.<br />
          Please, check the Console in the Development Tools (F12)
        </h3>
        <button onClick={this.toggleCompany}>Switch Company</button>
      </div>
    );
  }

  componentDidMount() {
    console.log(
      "[componentDidMount] l’istanza di un componente è stata agganciata o ridisegnata."
    );
  }

  componentWillUnmount() {
    console.log(
      "[componentWillUnmount] l'istanza di un component sta per essere sganciata o rimossa."
    );
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(
      "[shouldComponentUpdate] l'istanza di un component sta per essere aggiornata." +
        " Props: " +
        nextProps.name +
        " State: " +
        nextState.company
    );

    return true;
  }

  componentDidUpdate() {
    console.log(
      "[componentDidUpdate] l'istanza di un component è stata aggiornata."
    );
  }

  static getDerivedStateFromProps(nextProps: any) {
    console.log("[getDerivedStateFromProps] ??? Value: " + nextProps.name);

    return {};
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("[getSnapshotBeforeUpdate] ??? ");
    console.log({ prevProps: prevProps });
    console.log({ prevState: prevState });
    return null;
  }
}
