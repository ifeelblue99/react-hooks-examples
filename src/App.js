import React from 'react';
import UseRef from './components/UseRef';
import UseContext from './components/UseContext';
import UseReducer from './components/UseReducer.js';
import UseImperativeHandle from './components/UseImperativeHandle';
import './style.css';

export default function App() {
  const ColorContext = React.createContext();
  const colorRef = React.useRef();
  const [shape, setShape] = React.useState({
    BackgroundColor: 'orange',
    borderRadius: '50px',
  });
  return (
    <ColorContext.Provider value={shape}>
      <UseReducer />
      <UseRef />
      <button onClick={() => colorRef.current.changeColor()}>change</button>
      <UseImperativeHandle ref={colorRef} />
      <UseContext />
    </ColorContext.Provider>
  );
}
