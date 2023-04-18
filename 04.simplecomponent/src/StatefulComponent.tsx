import React, { Component } from "react";

class StatefulComponentState {
  constructor(
    public user: any,
    public detailsShowing: boolean = false,
    public detailsVisibilityLabel: string = ""
  ) {}
}

export default class StatefulComponent extends Component<
  any,
  StatefulComponentState
> {
  constructor(props: any) {
    super(props);

    this.state = new StatefulComponentState(
      {
        username: "john.kennedy",
        firstname: "John",
        lastname: "Kennedy",
      },
      false,
      "Show"
    );
  }

  toggleDetails = () => {
    const label = this.state.detailsVisibilityLabel == "Show" ? "Hide" : "Show";
    this.setState((prevState: StatefulComponentState) => {
      return {
        user: {
          username: "mario.rossi",
          firstname: "Mario",
          lastname: "Rossi",
        },
        detailsShowing: !prevState.detailsShowing,
        detailsVisibilityLabel: label,
      };
    });
  };

  render() {
    // if (this.state.detailsShowing == true) return null;

    // let box = <></>;
    // if (this.state.detailsShowing)
    //   box = (
    //     <div className="box">
    //       <h3>{this.state.user.firstname}</h3>
    //       <h3>{this.state.user.lastname}</h3>
    //       <h4>3333333</h4>
    //     </div>
    //   );

    return (
      <div>
        <h1>User Details</h1>
        <h3>UserName:</h3>
        {this.state.user.username}
        <br />
        <a href="#" onClick={this.toggleDetails}>
          {this.state.detailsVisibilityLabel} Details
        </a>
        <div className={"box " + (this.state.detailsShowing ? "" : "hidden")}>
          <h3>{this.state.user.firstname}</h3>
          <h3>{this.state.user.lastname}</h3>
          <h4>111111</h4>
        </div>
        {/* {this.state.detailsShowing && (
          <div className="box">
            <h3>{this.state.user.firstname}</h3>
            <h3>{this.state.user.lastname}</h3>
            <h4>bla bla bla</h4>
          </div>
        )}
        {box} */}
      </div>
    );
  }
}
