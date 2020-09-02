import React, { useEffect, useState } from 'react';

function AsyncTodos() {
  const [todo, setTodo] = useState({});
  const [todoId, setTodoId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todoId]);

  return (
    <div>
      <input
        type="text"
        value={todoId}
        onChange={(e) => setTodoId(e.target.value)}
      />
      <div>
        {todo.title} - {todo.completed ? 'completed' : 'not complete'}
      </div>
    </div>
  );
}

export default AsyncTodos;
