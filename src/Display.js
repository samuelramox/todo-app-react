import React from 'react';

const Display = ({todo, removeTodo, editTodo}) => (
  <ul>
    { todo.map((todo) => (
        <li className="todo-list" key={ todo.id }>
          <input className="button-check" type="checkbox"></input>
          <input className="todo-text" maxLength="40" defaultValue={ todo.text } onChange={ this.editTodo }>
          </input>
          <button type="button" className="button-remove" onClick={ () => removeTodo(todo) }></button>
        </li>)) }
  </ul>
)

export default Display
