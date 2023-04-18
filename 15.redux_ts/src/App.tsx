import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { toggleDarkMode } from './reduxplain/actions';
import TodoList from './reduxplain/components/TodoList';
import { AppState } from './reduxplain/reducers';

// import TodoContainer from './components/TodoContainer';
// import TicketList from './components/TicketList';
// import { TestTinyRedux } from './tinyRedux/TestTinyRedux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector<AppState>(state => state.theme.darkTheme);

  const title = darkTheme ? "Light Theme" : "Dark Theme";
    
  const toggleDM = () => {
      dispatch(toggleDarkMode());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>TODOS (React &amp; Redux with Typescript)</h3>
        <div style={{ border: "1px solid red", backgroundColor: "gray", width: "200px", padding:"10px", cursor:"pointer" }} 
          onClick={toggleDM}>{title}</div>
        <TodoList></TodoList>
        {/* <TodoContainer/>
        <TicketList></TicketList> */}
        {/* <TestTinyRedux></TestTinyRedux> */}
      </header>
    </div>
  );
}

export default App;
