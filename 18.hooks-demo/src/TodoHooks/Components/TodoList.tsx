import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import StateContext from '../../StateContext'
import Todo from '../../Todo';

interface TodoListProps {
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
}

export default function TodoList(props: TodoListProps) {
    const items = useContext(StateContext)

    return (<>
    { items.map((item: Todo) =>
        <TodoItem {...item} {...props} key={item.id} />
    )}
    </>)
}
