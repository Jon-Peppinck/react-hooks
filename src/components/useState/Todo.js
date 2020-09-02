import React, { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() =>
          setTodos([...todos, { id: todos.length + 1, todo: todo }])
        }
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
