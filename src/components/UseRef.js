import React from 'react';

export default function UseRef() {
  const boxRef = React.useRef();

  function changeColor() {
    const bgColor = boxRef.current.style.backgroundColor;
    bgColor === 'green'
      ? (boxRef.current.style.backgroundColor = 'red')
      : (boxRef.current.style.backgroundColor = 'green');
  }

  return <div onClick={changeColor} ref={boxRef} className="box"></div>;
}
