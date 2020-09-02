import React, { useState, useEffect } from 'react';

function TitleCounter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    console.log('useEffect called');
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter name..."
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="enter email..."
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={() => setCount((previousTotal) => previousTotal + 1)}>
        Increment Count
      </button>
      <span>{count}</span>
    </div>
  );
}

export default TitleCounter;
