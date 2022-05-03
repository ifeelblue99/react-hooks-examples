import React, { useContext } from 'react';
import { ColorContext } from '../App';

export default function UseContext() {
  const shape = useContext(ColorContext);
  return (
    <div
      onClick={shape[2]}
      style={{ backgroundColor: shape[0], borderRadius: shape[1] }}
      className="square"
    ></div>
  );
}
