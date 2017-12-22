import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Button from '../button'

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
          <form className="todo-input col-12 _flex _between _align-center" onSubmit={ (e) => submit(e) }>
            <input type="text" maxLength="35" className="text" placeholder="Start typing..." onChange={ this.handleTextChange } value={ this.state.value } />
            <Button type="submit" className="button -add" />
          </form>
        </div>
      </div>
    )
  }
}

TodoInput.propTypes = {
  submit: PropTypes.func.isRequired
}


export default TodoInput
