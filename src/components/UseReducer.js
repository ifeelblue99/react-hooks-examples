import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, show: !state.show };
    default:
      return state;
  }
}

export default function UseReducer() {
  function handleClick() {
    dispatch({ type: 'increment' });
  }

  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    show: false,
  });
  return (
    <>
      {state.count}
      <button onClick={handleClick}>increment</button>
      {state.show && <div>showing message</div>}
    </>
  );
}
