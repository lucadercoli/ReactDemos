import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import TodoList from './components/TodoList'
const App = () => (
  <div className="todoBody">
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App