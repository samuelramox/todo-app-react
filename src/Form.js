import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleTextChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }


  render() {
    const {submit} = this.props
    return (
      <div>
        <header className="todo-header">
          <h1 className="todo-title">TODOs</h1>
        </header>
        <form className="todo-form" onSubmit={ (e) => submit(e, this.state.value) }>
          <input type="text" maxLength="45" className="todo-text" placeholder="Start typing..." onChange={ this.handleTextChange } value={ this.state.value }/>
          <button type="submit" className="button-add">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default Form
