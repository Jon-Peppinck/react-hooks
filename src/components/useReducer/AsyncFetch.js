import React, { useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  todo: {},
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TODO_RETRIEVED':
      return {
        loading: false,
        todo: action.todo,
        error: '',
      };
    case 'TODO_ERROR':
      return {
        loading: false,
        todo: {},
        error: 'Could not get todo',
      };
    default:
      return state;
  }
};

function AsyncFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: 'TODO_RETRIEVED', todo: todo });
      })
      .catch((err) => {
        dispatch({ type: 'TODO_ERROR' });
      });
  }, []);

  return (
    <div>
      {!state.loading ? state.todo.title : 'Fetching data...'}
      {state.error ? 'Error fetching data' : null}
    </div>
  );
}

export default AsyncFetch;
