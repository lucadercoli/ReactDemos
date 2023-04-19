import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropRed from './Components/PropsController'
import CtxRed from './Components/ContextComponent'
import ReduxRed from './Components/ReduxComponent'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <PropRed></PropRed> */}
      <CtxRed></CtxRed>
      {/* <ReduxRed></ReduxRed> */}
    </div>
  );
}

export default App;