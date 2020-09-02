import React from 'react';

import Settings from '../Settings/Settings';

function Page2() {
  return (
    <div>
      <div
        style={{
          height: '200px',
          backgroundColor: 'orange',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
        }}
      >
        Some component
      </div>
      <Settings />
    </div>
  );
}

export default Page2;
