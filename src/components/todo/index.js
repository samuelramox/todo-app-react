import React, { Component } from 'react'
import './index.css'

class TodoInput extends Component {
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
      <div className="container">
        <div className="row">
          <form className="todo-form col-12 _flex _between _align-center" onSubmit={ (e) => submit(e) }>
            <input type="text" maxLength="35" className="text" placeholder="Start typing..." onChange={ this.handleTextChange } value={ this.state.value } />
            <button type="submit" className="button -add"></button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoInput
