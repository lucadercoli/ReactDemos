import React from 'react'

interface TodoItemProps {
    id: string
    title: string;
    completed: boolean;
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
}

export default function TodoItem(props: TodoItemProps) {
    const handleToggle = () => {
        const { toggleTodo, id } = props
        toggleTodo(id)
    }

    const handleRemove = () => {
        const { removeTodo, id } = props
        removeTodo(id)
    }

    const { title, completed } = props

    return (
        <div>
            <div style={{ width: 400, height: 25, textAlign: 'left' }}>
                <input type="checkbox" checked={completed} onChange={handleToggle} />
                {title}
                <button style={{ float: 'right' }} onClick={handleRemove}>x</button>
            </div>
        </div>
    )
}
