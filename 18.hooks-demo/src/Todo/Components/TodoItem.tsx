import React, { Component } from 'react'

interface TodoItemProps {
    id: string
    title: string;
    completed: boolean;
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
}

export default class TodoItem extends Component<TodoItemProps, {}> {
    handleToggle = () => {
        const { toggleTodo, id } = this.props
        toggleTodo(id)
    }

    handleRemove = () => {
        const { removeTodo, id } = this.props
        removeTodo(id)
    }

    render() {
        const { title, completed } = this.props

        return (
            <div>
                <div style={{ width: 400, height: 25, textAlign: 'left' }}>
                    <input type="checkbox" checked={completed} onChange={this.handleToggle} />
                    {title}
                    <button style={{ float: 'right' }} onClick={this.handleRemove}>x</button>
                </div>
            </div>
        )
    }
}