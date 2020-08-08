import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Complex } from './Complex';

afterEach(cleanup);

test('Default value should be 0', () => {
  const component = render(<Complex />);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('0 points');
});

test('Hitting + should increase count', () => {
  const component = render(<Complex />);
  const increase = component.getByText('+');
  fireEvent.click(increase);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('1 points');
});

test('Hitting - should decrease count', () => {
  const component = render(<Complex />);
  const decrease = component.getByText('-');
  fireEvent.click(decrease);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('-1 points');
});

test('Hitting +++- should result in 2', () => {
  const component = render(<Complex />);
  const increase = component.getByText('+');
  const decrease = component.getByText('-');
  fireEvent.click(increase);
  fireEvent.click(increase);
  fireEvent.click(increase);
  fireEvent.click(decrease);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('2 points');
});
