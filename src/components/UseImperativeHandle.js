import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function UseImperativeHandle(props, ref) {
  const [color, setColor] = React.useState('black');

  useImperativeHandle(ref, () => ({
    changeColor: () => {
      setColor((prev) => {
        return prev === 'black' ? 'blue' : 'black';
      });
    },
  }));
  return (
    <div ref={ref} style={{ backgroundColor: color }} className="square"></div>
  );
}

export default forwardRef(UseImperativeHandle);
