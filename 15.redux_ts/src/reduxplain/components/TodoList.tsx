import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo, completeTodo, TodoAction } from '../actions';
import { AppState } from '../reducers';

interface TodoListProps {
    todos: string[];
    addNewTodo: (todo: string) => void;
    completeATodo: (idx: number) => void;
    darkTheme: boolean;
}

class TodoListState {
    constructor(public todoText: string) {}
}

class TodoList extends Component<TodoListProps, TodoListState> {
    constructor(props:TodoListProps) {
        super(props);
        this.state = new TodoListState("");
    }

    handleChange = (event: any) => {
        this.setState({todoText: event.target.value});
    };

    render(): JSX.Element {
        const tableTheme = this.props.darkTheme ? "red" : "white";

        const items = this.props.todos.map(
            (item: string, idx: number) => (<tr key={idx}>
                <td>{item}</td>
                <td>
                    <span style={{ border: "1px solid gray", color: "black", backgroundColor: tableTheme,
                     width: "100px", paddingLeft:"5px", paddingRight: "5px", cursor:"pointer", fontSize:"0.8em" }} 
                        onClick={() => this.props.completeATodo(idx)}>
                    Complete
                    </span>
                </td>
                </tr>)
        );

        return(<>
            <h1>Todo List</h1>
            <table>
                <thead><tr><th>Todo</th><th>&nbsp;</th></tr></thead>
                <tbody>{items}</tbody>
            </table>
            <hr style={{ width: "90%" }}/>
            <input type="text" name="todoText" 
                value={this.state.todoText} onChange={this.handleChange} />
            <button className="btn btn-small btn-primary" 
                onClick={() =>this.props.addNewTodo(this.state.todoText)}>Add</button>
            </>
        );
    }
}

// mapping dello stato
const MapStateToProps = (store: AppState) => {
    return {
        todos: store.todo.todos,
        darkTheme: store.theme.darkTheme
    };
}

// mapping delle azioni
const MapDispatchToProps = (dispatch: Dispatch<TodoAction>) => {
    return {
        addNewTodo: (todo: string) => dispatch(addTodo(todo)),
        completeATodo: (idx: number) => dispatch(completeTodo(idx))
    }
}

//HOC - High Order Component
export default connect(MapStateToProps, MapDispatchToProps)(TodoList);