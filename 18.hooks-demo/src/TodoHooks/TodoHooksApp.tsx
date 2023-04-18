import React, { useState, useEffect } from 'react';

import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import TodoFilter from './Components/TodoFilter'
import StateContext from '../StateContext'
import { fetchAPITodos, generateID } from '../DataService'
import Todo from '../Todo';


function TodoHooksApp() {
  const [todos, setTodos] = useState([] as Todo[]);
  const [filteredTodos, setFilteredTodos] = useState([] as Todo[]);
  const [filter, setFilter] = useState('all');

  // INITIAL LOADING OF THE TODOS VIA API
  useEffect(() => {
    fetchAPITodos().then((data: Todo[]) => {
        setTodos(data)
    })
  }, [])

  const addTodo = (title: string) => {
    const newTodo = new Todo( generateID(), title, false )

    const t = [newTodo, ...todos];
    setTodos(t)
  }

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed }
      }
      return t
    }, [])

    setTodos(newTodos)
  }

  const removeTodo = (id: string) => {
    const newTodos = todos.filter(t => {
      if (t.id === id) {
        return false
      }
      return true
    })

    setTodos(newTodos)
  }

  const applyFilter = (todos: Todo[] = [], filter: string) => {
    switch (filter) {
      case 'active':
        return todos.filter(t => t.completed === false)

      case 'completed':
        return todos.filter(t => t.completed === true)

      default:
      case 'all':
        return todos
    }
  }

  const filterTodos = (filterArg: string | null = null) => {
    setFilter(filterArg || filter);
  }

  // MANAGE LIST OF FILTERED TODOS (IT CHANGES WHEN TODO LIST CHANGES OR FILTER CHANGES)
  useEffect(() => {
    setFilteredTodos(applyFilter(todos, filter));
 }, [todos, filter]);

  const style = { 
    width: 400, 
    margin: "auto", 
    marginTop: 30, 
    backgroundColor: 'gray', 
    padding: 20 
  }

  return (
    <StateContext.Provider value={filteredTodos}>
      <div style={style}>
        <Header />
        <AddTodo addTodo={addTodo} />
        <hr />
        <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <hr />
        <TodoFilter filter={filter} filterTodos={filterTodos} />
      </div>
    </StateContext.Provider>
  );
}

export default TodoHooksApp;
