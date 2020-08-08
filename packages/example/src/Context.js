import React from 'react';
import { createStore, useStore } from 'redit';

export const Context = () => {
  createStore({ count: 0, unit: 'points' });

  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export const Counter = () => {
  const state = useStore();

  const increase = () => state.count++;
  const decrease = () => state.count--;

  return (
    <>
      <button onClick={decrease}>-</button>
      <span title="count">
        {state.count} {state.unit}
      </span>
      <button onClick={increase}>+</button>
    </>
  );
};
