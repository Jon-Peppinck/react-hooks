import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('interval log');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return <div>timer</div>;
}

export default Timer;
