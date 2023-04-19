import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const AppContext = React.createContext({});

class AppProvider extends Component {
  state = {
    number : 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }

  render() {
      return <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    }
}

const Green = () => (
  <div className="box green">
      <AppContext.Consumer>
        {(context: any) => { 
          return (
            <div>
              <div>{context.number}</div>
              <button onClick={context.inc}>INC</button>
            </div>
            
          );
        }}
      </AppContext.Consumer>
  </div>
)
const Blue = () => (
  <div className="box blue">
    {/* <AppContext.Consumer>
      {(context: any) => <button onClick={context.inc}>INC</button>}
    </AppContext.Consumer> */}
    <Green />
  </div>
)

class Red extends Component {
  render() {
    return (
      <AppProvider> 
        <div className="box red">
          <AppContext.Consumer>
              {(context: any) => context.number}
          </AppContext.Consumer>
          <Blue />
        </div>
      </AppProvider>
    );
  }
}

/*const Green = (props: any) => (
  <div className="green">{props.number}</div>
)
const Blue = (props: any) => (
  <div className="blue">
    <Green number={props.number} />
  </div>
)
 
class Red extends Component {
  state = {
    number : 10
  }
  render() {
    return ( 
      <div className="red">
        {this.state.number}
        <Blue number={this.state.number} />
      </div>
    );
  }
}*/

const App: React.FC = () => {
  return (
    <div className="App">
      <Red />
    </div>
  );
}

export default App;
