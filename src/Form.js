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
      value: e.target.value
    })
  }


  render() {
    const {submit} = this.props
    return (
      <div>
        <header className="todo-header">
          <h1 className="todo-title">TODO LIST</h1>
        </header>
        <form className="todo-form" onSubmit={ (e) => submit(e) }>
          <input type="text" maxLength="35" className="todo-text" placeholder="Start typing..." onChange={ this.handleTextChange } value={ this.state.value } />
          <button type="submit" className="button-add"></button>
        </form>
      </div>
    )
  }
}

export default Form
