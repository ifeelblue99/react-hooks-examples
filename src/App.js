import React from 'react';
import UseReducer from './components/UseReducer.js';
import UseImperativeHandle from './components/UseImperativeHandle';
import './style.css';
import UseRef from './components/UseRef';

export default function App() {
  const colorRef = React.useRef();
  return (
    <div>
      <UseReducer />
      <UseRef />
      <button onClick={() => colorRef.current.changeColor()}>change</button>
      <UseImperativeHandle ref={colorRef} />
    </div>
  );
}
