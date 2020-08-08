import React from 'react';

let flushes = 0;
let globalProxy = null;

export const createStore = (defaultState = {}) => {
  const [, setFlushes] = React.useState(flushes);

  const get = (target, key) => {
    if (target[key] && typeof target[key] === 'object') {
      return new Proxy(target[key], methods);
    } else {
      return Reflect.get(target, key);
    }
  };

  const set = (target, key, value) => {
    // infinite loop protection
    if (target[key] === value) return true;

    const returnValue = Reflect.set(target, key, value);
    setFlushes(++flushes);

    return returnValue;
  };

  const deleteProperty = (target, key) => {
    const returnValue = delete target[key];
    setFlushes(++flushes);

    return returnValue;
  };

  const methods = { get, set, deleteProperty };

  const [proxy] = React.useState(new Proxy(defaultState, methods));
  globalProxy = proxy;

  return proxy;
};

export const useStore = () => {
  return globalProxy;
};
