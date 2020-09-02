import React, { useContext } from 'react';

import { UserContext } from '../../App';

function Settings() {
  const userContext = useContext(UserContext);

  return (
    <div>
      {userContext.name}'s settings - YouTube Subscribers: {userContext.count}
      <button onClick={() => userContext.setCount('increment')}>
        Increment
      </button>
    </div>
  );
}

export default Settings;
