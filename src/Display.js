import React from 'react';

const Display = ({todo, removeTodo, editTodo}) => (
  <ul>
    { todo.map((todo) => (
        <li className="todo-task _flex _between _align-center" key={ todo.id }>
          <input type="checkbox"></input>
          <textarea className="text" maxLength="35" defaultValue={ todo.text } onChange={ this.editTodo }>
          </textarea>
          <button type="button" className="button -remove" onClick={ () => removeTodo(todo) }></button>
        </li>)) }
  </ul>
)

export default Display
