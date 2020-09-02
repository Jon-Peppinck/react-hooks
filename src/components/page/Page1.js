import React from 'react';
// useState
import Counter from '../useState/Counter';
import Todo from '../useState/Todo';
import User from '../useState/User';
// useEffect
import TitleCounter from '../useEffect/TitleCounter';
import Timer from '../useEffect/Timer';
import AsyncTodos from '../useEffect/AsyncTodos';
// useReducer
import CounterUseReducer from '../useReducer/CounterUseReducer';
import AsyncFetch from '../useReducer/AsyncFetch';
// useCallback
import HomePage from '../useCallback/HomePage';

function Page1() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <User /> */}
      {/* <TitleCounter /> */}
      {/* <Timer /> */}
      {/* <AsyncTodos /> */}
      {/* <CounterUseReducer /> */}
      <HomePage />
      {/* <AsyncFetch /> */}
    </div>
  );
}

export default Page1;
