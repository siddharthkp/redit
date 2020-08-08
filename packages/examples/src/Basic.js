import React from 'react';
import { createStore } from 'redit';

export const Basic = () => {
  const state = createStore({ count: 0, unit: 'points' });

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
