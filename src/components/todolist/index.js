import React from 'react';
import PropTypes from 'prop-types'
import './index.css'

const TodoList = ({todos, removeTodo, editTodo}) => (
  <div className="container">
    <div className="row">
      <ul className="col-12">
        { todos.map((todos) => (
            <li className="todo-list _flex _between _align-center" key={ todos.id }>
              <input type="checkbox" />
              <textarea className="text" maxLength="35" defaultValue={ todos.text } onChange={ this.editTodo }>
              </textarea>
              <button type="button" className="button -remove" onClick={ () => removeTodo(todos) }></button>
            </li>)) }
      </ul>
    </div>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default TodoList
