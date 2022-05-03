import React from 'react';
import UseRef from './components/UseRef';
import UseContext from './components/UseContext';
import UseReducer from './components/UseReducer.js';
import UseImperativeHandle from './components/UseImperativeHandle';
import './style.css';

export const ColorContext = React.createContext();

export default function App() {
  const colorRef = React.useRef();
  const [shape, setShape] = React.useState(['orange', '50px']);

  function changeStyle() {
    setShape((prev) => {
      return shape[1] === '50px' ? ['pink', '5px'] : ['orange', '50px'];
    });
  }

  return (
    <ColorContext.Provider value={shape}>
      <UseReducer />
      <UseRef />
      <button onClick={() => colorRef.current.changeColor()}>change</button>
      <UseImperativeHandle ref={colorRef} />
      <button onClick={() => changeStyle()}>change</button>
      <UseContext />
    </ColorContext.Provider>
  );
}
