import React from 'react';

const Display = ({todo, removeTodo}) => (
  <ul>
    { todo.map((todo) => (
        <li className="todo-list">
          <p key={todo.id} className="todo-text">
            { todo.text }
          </p>
          <button type="button" className="button-remove" onClick={ () => removeTodo(todo) }></button>
        </li>)) }
  </ul>
)

export default Display
