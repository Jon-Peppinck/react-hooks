import React, { useState } from 'react';

function User() {
  const [user, setUser] = useState({ name: '', email: '' });
  return (
    <div>
      <form>
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
      </form>
      <p>
        Welcome {user.name}! We have sent you a welcome email to {user.email}
      </p>
    </div>
  );
}

export default User;
