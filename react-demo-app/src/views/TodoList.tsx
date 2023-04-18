import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { addTodo, AppStateAction, completeTodo } from '../redux/actions';
import { AppState } from '../redux/reducers';

interface ITodoListProps {
    todos: string[];
    addNewTodo: (todo: string) => void;
    completeTodo: (index: number) => void;
    darkMode: boolean;
}

class TodoList extends Component<ITodoListProps> {
    state = { todoInput: ''};

    handleChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;

        this.setState({ todoInput: value });
    }

    saveTodo = (evt: any) => {
        evt.preventDefault();

        this.props.addNewTodo(this.state.todoInput);
    }

    render(): JSX.Element {
        const content = this.props.todos.map(
            (item: string, idx: number) => (<tr key={idx}>
                    <td>{item}</td>
                    <td>
                        <span className='btn btn-danger'
                                onClick={() => this.props.completeTodo(idx)}>
                            Complete
                        </span>
                    </td>
                </tr>)
        );

        return(<div className="container">
            <div className='row'>
                <div className='col-8'>
                    <input type="text" value={this.state.todoInput}
                        onChange={this.handleChanges} />
                </div>
                <div className='col-1'>
                    <span className='btn btn-primary' onClick={this.saveTodo}>Add</span>
                </div>
                <div className='col-3'>
                    &nbsp;
                </div>
            </div>
            <div className="row">
                <div className='col-12'>
                    <h1>Todo List</h1>
                    <table className={"table " + 
                        (this.props.darkMode ? "table-dark" : "table-striped")}>
                        <thead>
                            <th>Todo</th>
                            <th>&nbsp;</th>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
    }
}

const MapStateToProps = (store: AppState) => {
    return {
        todos: store.todo.todos,
        darkMode: store.theme.darkMode
    };
}

const MapDispatchToProps = (dispatch: Dispatch<AppStateAction>) => {
    return {
        addNewTodo: (todo: string) => dispatch(addTodo(todo)),
        completeTodo: (index: number) => dispatch(completeTodo(index))
    };
}

// HOC - High Order Component
export default connect(MapStateToProps, MapDispatchToProps)(TodoList);