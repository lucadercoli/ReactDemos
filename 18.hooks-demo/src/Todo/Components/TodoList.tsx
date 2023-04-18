import React, { Component } from 'react'

import TodoItem from './TodoItem'
import StateContext from '../../StateContext'
import Todo from '../../Todo';

interface TodoListProps {
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
}

export default class TodoList extends Component<TodoListProps, {}> {
    render() {
        return(
            <StateContext.Consumer>
                {(items: Todo[]) => { 
                    return (<>
                        { items.map((item: Todo) =>
                            <TodoItem {...item} {...this.props} key={item.id} />
                        )}
                    </>);
                }}
            </StateContext.Consumer>
        );
    }
}