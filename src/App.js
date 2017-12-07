import React, { Component } from 'react';
import Form from './Form'
import Display from './Display'

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
      id: todo.length + 1,
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

  render() {
    const {todo} = this.state

    return (
      <div>
        <Form submit={ this.submitForm } />
        <Display todo={ todo } removeTodo={ this.removeTodo } />
      </div>
    )
  }
}

export default App
