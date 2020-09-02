import React, { memo } from 'react';

function Title({ title }) {
  console.log('Render Title Component');
  return <div>{title}</div>;
}

export default memo(Title);
