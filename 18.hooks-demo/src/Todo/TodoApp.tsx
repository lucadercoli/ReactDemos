import React, { Component } from 'react';

import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import TodoFilter from './Components/TodoFilter'
import StateContext from '../StateContext'
import { fetchAPITodos, generateID } from '../DataService'
import Todo from '../Todo';

class TodoAppState {
  constructor(public todos: Todo[], public filteredTodos: Todo[], public filter: string) { }
}

export default class TodoApp extends Component<any, TodoAppState> {
  constructor(props: any) {
    super(props);
    this.state = new TodoAppState([] as Todo[], [] as Todo[], 'all');
  }

  componentDidMount() {
    fetchAPITodos().then((data: Todo[]) => {
          this.setState({ todos: data })
          this.filterTodos();
      })
  }

  addTodo = (title: string) => {
    const newTodo = new Todo( generateID(), title, false )

    this.setState({ todos: [newTodo, ...this.state.todos] });
    this.filterTodos();
  }

  toggleTodo = (id: string) => {
    const newTodos = this.state.todos.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed }
      }
      return t
    }, [])

    this.setState({ todos: newTodos })
    this.filterTodos();
  }

  removeTodo = (id: string) => {
    const newTodos = this.state.todos.filter(t => {
      if (t.id === id) {
        return false
      }
      return true
    })

    this.setState({ todos: newTodos })
    this.filterTodos();
  }

  applyFilter = (todos: Todo[] = [], filter: string) => {
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

  filterTodos = (filterArg: string | null = null) => {
    this.setState(({ todos, filter }) => ({
      filter: filterArg || filter,
      filteredTodos: this.applyFilter(todos, filterArg || filter)
    }))
  }

  style = { 
    width: 400, 
    margin: "auto", 
    marginTop: 30, 
    backgroundColor: 'lightgreen', 
    padding: 20 
  }

  render() {
    const { filteredTodos, filter } = this.state;
    return (
      <StateContext.Provider value={filteredTodos}>
        <div style={this.style}>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <hr />
          <TodoList toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
          <hr />
          <TodoFilter filter={filter} filterTodos={this.filterTodos} />
        </div>
      </StateContext.Provider>
    );
  }
}
