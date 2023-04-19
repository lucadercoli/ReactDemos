import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import ReduxGreen from './GreenComponent'

const initialState = {
    number: 10
}

const appReducer = function(state = initialState, action: any) {
    switch(action.type) {
        case 'INC':
            var pippo = state.number + 1
            return { ...state, number: pippo }
        default:
            return state
    }
}

export const store = createStore(appReducer)
 
export const ReduxBlue : React.FC = () => ( 
    <div className="box blue">
        <ReduxGreen />
    </div>
)

class ReduxRed extends Component<any, any> {
    render() {
        return (
            <div className="box red">
                <div>{this.props.number}</div>
                <ReduxBlue></ReduxBlue>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxRed)