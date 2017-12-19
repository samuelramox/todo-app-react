import React from 'react';

const TodoList = ({todo, removeTodo, editTodo}) => (
  <div className="container">
    <div className="row">
      <ul className="col-12">
        { todo.map((todo) => (
            <li className="todo-task _flex _between _align-center" key={ todo.id }>
              <input type="checkbox"></input>
              <textarea className="text" maxLength="35" defaultValue={ todo.text } onChange={ this.editTodo }>
              </textarea>
              <button type="button" className="button -remove" onClick={ () => removeTodo(todo) }></button>
            </li>)) }
      </ul>
    </div>
  </div>
)

export default TodoList
