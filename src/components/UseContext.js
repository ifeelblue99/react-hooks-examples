import React, { useContext } from 'react';

function UseContext() {
  const shape = useContext(ColorContext);
  return <div className="square"></div>;
}

export default UseContext;
