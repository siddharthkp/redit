import React from 'react';
import { createStore, useStore } from 'redit';

export const Complex = () => {
  const state = createStore({
    data: { count: 0, unit: 'points' },
    actions: {
      increase: () => state.data.count++,
      decrease: () => state.data.count--,
    },
  });

  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export const Counter = () => {
  const {
    data: { count, unit },
    actions,
  } = useStore();

  return (
    <>
      <button onClick={actions.decrease}>-</button>
      <span title="count">
        {count} {unit}
      </span>
      <button onClick={actions.increase}>+</button>
    </>
  );
};
