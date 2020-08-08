import React from 'react';
import { createStore } from 'redit';

export const Nested = () => {
  const state = createStore({ data: { count: 0 }, unit: 'points' });

  const increase = () => state.data.count++;
  const decrease = () => state.data.count--;

  return (
    <>
      <button onClick={decrease}>-</button>
      <span title="count">
        {state.data.count} {state.unit}
      </span>
      <button onClick={increase}>+</button>
    </>
  );
};
