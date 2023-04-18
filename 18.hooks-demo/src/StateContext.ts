import React from 'react'
import Todo from './Todo'

let todos: Todo[] = []
const StateContext = React.createContext(todos)

export default StateContext