import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxGreen extends Component<any, any> {
    render() {
        return (
            <div className="box green">
                <div>{this.props.number}</div>
                <button onClick={this.props.increment}>Inc</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        increment: ()=> { dispatch({ type: "INC" }) }
    }
}

function mapStateToProps(state: any) {
    return {
        number: state.number
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxGreen)