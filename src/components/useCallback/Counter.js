import React, { memo } from 'react';

function Counter({ count, incrementCount, children }) {
  console.log(`Render Counter Component ${children}`);
  return (
    <button onClick={incrementCount}>
      {count} - {children}
    </button>
  );
}

export default memo(Counter);
