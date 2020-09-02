import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((previousTotal) => previousTotal + 1)}>
        increment
      </button>
      <button onClick={() => setCount((previousTotal) => previousTotal - 1)}>
        decrement
      </button>
      {count}
    </div>
  );
}

export default Counter;
