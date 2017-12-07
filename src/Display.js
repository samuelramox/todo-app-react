import React from 'react';

const Display = ({todo, removeTodo, editTodo}) => (
  <ul>
    { todo.map((todo) => (
        <li className="todo-list">
          <input className="todo-text" key={ todo.id } defaultValue={ todo.text } onChange={ this.editTodo }>
          </input>
          <button type="button" className="button-remove" onClick={ () => removeTodo(todo) }></button>
        </li>)) }
  </ul>
)

export default Display
