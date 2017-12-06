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

  submitForm = (e, value) => {
    e.preventDefault()
    const prevState = this.state.todo
    prevState.push(value)
    this.setState({
      todo: prevState
    })
  }

  render() {
    const {todo, id} = this.state

    return (
      <div>
        <Form submit={ this.submitForm } />
        <Display todo={ todo } removeTodo={ this.removeTodo } key={id}/>
      </div>
    )
  }
}

export default App
