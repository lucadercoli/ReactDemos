import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/actions";

interface TodoContainerState {
    todoInput: string;
  }
  
  interface TodoContainerProps {
    count: number;
    todoList: string[];
    addToDo: (item: string) => object;
    deleteToDo: (idx: number) => object;
  }

class TodoContainer extends Component<TodoContainerProps, TodoContainerState> {
    constructor(props: TodoContainerProps) {
        super(props);

        this.state = {
            todoInput: ""
        };
    }

    handleTextChange = (e:any) => {
        this.setState({
            todoInput: e.target.value
        });
    };

    handleButtonClick = () => {
        if(this.state.todoInput !== "") {
            this.props.addToDo(this.state.todoInput);
            this.setState({
                todoInput: ""
            });
        }
    };

    handleDeleteButtonClick = (idx: number) => {
        console.log("deleting", idx);
        this.props.deleteToDo(idx);
    };

    render() {
        let todoJSX: JSX.Element[] | JSX.Element;
        if (!this.props.todoList.length) {
            todoJSX = <p>No active todos.</p>;
        } else {
            todoJSX = this.props.todoList.map((item, idx) => {
                return (
                <TodoItem item={item} key={idx} idx={idx} 
                    handleDelete={this.handleDeleteButtonClick} />
                );
            });
        }

        return (
            <div>
                {todoJSX}
                <input
                    onChange={this.handleTextChange}
                    placeholder={"New To Do Here"}
                    value={this.state.todoInput}
                />
                <button className="addButton" onClick={this.handleButtonClick}>Add To Do</button>
            </div>
        )
    }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
    return {
        todoList: store.todos.todos,
        count: store.todos.count
    };
};
  
const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
    addToDo: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
    deleteToDo: (idx: number) => dispatch({ type: actionTypes.DELETE, payload: idx })
});

export default connect(
    MapStateToProps,
    MapDispatchToProps
  )(TodoContainer);