import React, { Component } from "react";
import { number } from "prop-types";

const AppContext = React.createContext(
  { 
    number: 0, 
    inc: () => {}
  }
);

export const CtxGreen = () => (
  <div className="box green">
      <AppContext.Consumer>
        {({ number, inc }) => { 
          return (
            <div>
              <div>{number}</div>
              <button onClick={inc}>INC</button>
            </div>
            
          );
        }}
      </AppContext.Consumer> 
  </div>
)

export const CtxBlue = () => ( 
  <div className="box blue">
    <CtxGreen />
  </div>
)

export default class Red extends Component<any,any> {
  state = {
    number : 10,
    inc: () => {
        this.setState({ number: this.state.number + 1 })
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}> 
        <div className="box red">
          <AppContext.Consumer>
              {(context: any) => context.number}
          </AppContext.Consumer>
          <CtxBlue />
        </div>
      </AppContext.Provider>
    );
  }
}