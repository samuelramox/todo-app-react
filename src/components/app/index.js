import React, { Component } from 'react';
import Form from '../todo'
import TodoList from '../todolist'
import Header from '../header'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    let {todos} = this.state
    const value = e.target.querySelector('input').value
    const newTodo = {
      id: 10000 * Math.random().toFixed(4),
      text: value
    }
    todos = todos.concat(newTodo)
    this.setState({
      todos
    })
  }

  removeTodo = (todo) => {
    this.setState((state) => ({
      todos: state.todos.filter((item) => item.id !== todo.id
      )
    }))
  }

  editTodo = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const {todos} = this.state

    return (
      <div>
        <Header />
        <Form submit={ this.submitForm } />
        <TodoList todos={ todos } removeTodo={ this.removeTodo } editTodo={ this.editTodo } />
      </div>
    )
  }
}

export default App
