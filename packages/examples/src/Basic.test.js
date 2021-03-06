import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Basic } from './Basic';

afterEach(cleanup);

test('Default value should be 0', () => {
  const component = render(<Basic />);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('0 points');
});

test('Hitting + should increase count', () => {
  const component = render(<Basic />);
  const increase = component.getByText('+');
  fireEvent.click(increase);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('1 points');
});

test('Hitting - should decrease count', () => {
  const component = render(<Basic />);
  const decrease = component.getByText('-');
  fireEvent.click(decrease);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('-1 points');
});

test('Hitting +++- should result in 2', () => {
  const component = render(<Basic />);
  const increase = component.getByText('+');
  const decrease = component.getByText('-');
  fireEvent.click(increase);
  fireEvent.click(increase);
  fireEvent.click(increase);
  fireEvent.click(decrease);
  const count = component.getByTitle('count');
  expect(count.textContent).toBe('2 points');
});
