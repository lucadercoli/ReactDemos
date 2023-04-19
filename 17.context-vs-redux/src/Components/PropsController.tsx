import React, { Component } from "react";

export const PropGreen = (props: any) => (
    <div className="box green">
        <div>{props.number}</div>
        <button onClick={props.increment}>Inc</button>
    </div>
)

export const PropBlue = (props: any) => {
    return (
        <div className="box blue">
            <PropGreen number={props.number} increment={props.increment} />
        </div>
    )
}

export default class PropRed extends Component {
    state = {
        number : 10,
        inc : () => {
            this.setState({ number: this.state.number + 1 })
        }
    }

    render() {
        return ( 
            <div className="box red">
                {this.state.number}
                <PropBlue number={this.state.number} increment={this.state.inc} />
            </div>
        );
    }
}