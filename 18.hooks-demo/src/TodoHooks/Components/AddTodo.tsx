import React, { useState } from 'react'

interface AddTodoProps {
    addTodo: (item: string) => void;
}

export default function AddTodo(props: AddTodoProps) {
    const [input, setInput] = useState("");

    const handleInput = (e: any) => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        if (input) {
            props.addTodo(input)
            setInput('')
        }
    }

    return (
        <form onSubmit={e => { e.preventDefault(); handleAdd() }}>
            <input
                type="text"
                placeholder="enter new task..."
                style={{ width: 350, height: 15 }}
                value={input}
                onChange={handleInput}
            />
            <input
                type="submit"
                style={{ float: 'right', marginTop: 2 }}
                disabled={!input}
                value="add"
            />
        </form>
    )
}
