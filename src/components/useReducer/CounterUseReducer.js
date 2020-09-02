import React, { useReducer } from 'react';

const initialState = { count: 0 };

// const initialState = {
//   counterOne: 0,
//   counterTwo: 0,
// };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      const increment = action.increment ? action.increment : 1;
      return { count: state.count + increment };
    case 'decrement':
      return { count: state.count - 1 };
    // case 'incrementOne':
    //   return { ...state, counterOne: state.counterOne + 1 };
    // case 'decrementOne':
    //   return { ...state, counterOne: state.counterOne - 1 };
    // case 'incrementTwo':
    //   return { ...state, counterTwo: state.counterTwo + 1 };
    // case 'decrementTwo':
    //   return { ...state, counterTwo: state.counterTwo - 1 };
    default:
      return state;
  }
}

function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      {/* Count: {state.count} */}
      <div>
        {/* <button onClick={() => dispatch({ type: 'increment' })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          decrement
        </button> */}
        {/* <button onClick={() => dispatch({ type: 'increment', increment: 10 })}>
          +10
        </button>{' '} */}

        {/* <div>
          Count: {state.counterOne}
          <button onClick={() => dispatch({ type: 'incrementOne' })}>
            increment first counter
          </button>
        </div>
        <div>
          Count: {state.counterTwo}
          <button onClick={() => dispatch({ type: 'incrementTwo' })}>
            increment second counter
          </button>
        </div> */}
        <div>
          {state.count}
          <button onClick={() => dispatch({ type: 'increment' })}>
            increment
          </button>
        </div>
        <div>
          {stateTwo.count}
          <button onClick={() => dispatchTwo({ type: 'increment' })}>
            increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterUseReducer;
