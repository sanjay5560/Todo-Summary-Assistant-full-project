import React from 'react';

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) return <p>No todos yet!</p>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.task}
          <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
