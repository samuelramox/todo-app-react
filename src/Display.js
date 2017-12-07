import React from 'react';

const Display = ({todo, removeTodo, editTodo}) => (
  <ul>
    { todo.map((todo) => (
        <li className="todo-list" key={ todo.id }>
          <input className="todo-text" defaultValue={ todo.text } onChange={ this.editTodo }>
          </input>
          <button type="button" className="button-remove" onClick={ () => removeTodo(todo) }></button>
        </li>)) }
  </ul>
)

export default Display
