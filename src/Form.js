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
          <h1>TODO LIST</h1>
        </header>
        <form className="todo-search _flex _align-center">
          <input type="text" className="text" maxLength="35" placeholder="Start search..."/>
        </form>
        <div className="container">
          <div className="row">
            <form className="todo-form col-12 _flex _between _align-center" onSubmit={ (e) => submit(e) }>
              <input type="text" maxLength="35" className="text" placeholder="Start typing..." onChange={ this.handleTextChange } value={ this.state.value } />
              <button type="submit" className="button -add"></button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
