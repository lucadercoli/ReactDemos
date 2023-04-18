import React, { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/actions';
import { AppState } from '../redux/reducers';

const Home: React.FC = (props) => {
    const darkMode: boolean = useSelector<AppState, boolean>(s => s.theme.darkMode);
    const todos: string[] = useSelector<AppState, string[]>(s => s.todo.todos);
    const dispatch = useDispatch();

    const viewStyle: CSSProperties = { 
        border: "2px solid darkred",
        backgroundColor: darkMode ? "darkgray" : ""
    };
    
    return(<div style={ viewStyle }>
        <h1>Welcome to the React Training</h1>
        <h2>13-Apr-2022</h2>
        <h3>Todos: {todos.length}</h3>
        <div>
            <span className='btn btn-dark' onClick={() => dispatch(toggleDarkMode())}>Toggle Dark Mode</span>
        </div>
    </div>);
}

export default Home;