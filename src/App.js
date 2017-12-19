import React, { Component } from 'react';
import Form from './Form'
import TodoList from './TodoList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: []
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    let {todo} = this.state
    const value = e.target.querySelector('input').value
    const newTodo = {
      id: 10000 * Math.random().toFixed(4),
      text: value
    }
    todo = todo.concat(newTodo)
    this.setState({
      todo
    })
  }

  removeTodo = (todo) => {
    this.setState((state) => ({
      todo: state.todo.filter((item) => item.id !== todo.id
      )
    }))
  }

  editTodo = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const {todo} = this.state

    return (
      <div>
        <Form submit={ this.submitForm } />
        <TodoList todo={ todo } removeTodo={ this.removeTodo } editTodo={ this.editTodo } />
      </div>
    )
  }
}

export default App
