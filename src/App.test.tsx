import '@testing-library/jest-dom'
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders App', async () => {
  render(<App />);
  const title = await screen.findByRole('title')
  expect(title).toHaveTextContent(/current player/i)
});

test('Set X winner', async () => {
  render(<App />);
  let winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/winner/i)
  let x = await screen.findByRole('box-0-0')
  let o = await screen.findByRole('box-0-1')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-1-0')
  o = await screen.findByRole('box-1-1')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-2-0')
  o = await screen.findByRole('box-2-1')
  fireEvent.click(x)
  fireEvent.click(o)
  winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/x/i)
  let reset = await screen.findByRole('reset')
  fireEvent.click(reset)
});

test('Set O winner', async () => {
  render(<App />);
  let winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/winner/i)
  let x = await screen.findByRole('box-0-0')
  let o = await screen.findByRole('box-0-1')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-1-0')
  o = await screen.findByRole('box-1-1')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-2-2')
  o = await screen.findByRole('box-2-1')
  fireEvent.click(x)
  fireEvent.click(o)
  winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/o/i)
  let reset = await screen.findByRole('reset')
  fireEvent.click(reset)
});

test('Set X winner Horizontal', async () => {
  render(<App />);
  let winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/winner/i)
  let x = await screen.findByRole('box-0-0')
  let o = await screen.findByRole('box-1-0')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-0-1')
  o = await screen.findByRole('box-1-1')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-0-2')
  o = await screen.findByRole('box-1-2')
  fireEvent.click(x)
  fireEvent.click(o)
  winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/x/i)
  let reset = await screen.findByRole('reset')
  fireEvent.click(reset)
});

test('Set O winner Horizontal', async () => {
  render(<App />);
  let winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/winner/i)
  let x = await screen.findByRole('box-0-0')
  let o = await screen.findByRole('box-1-0')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-0-1')
  o = await screen.findByRole('box-1-1')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-2-2')
  o = await screen.findByRole('box-1-2')
  fireEvent.click(x)
  fireEvent.click(o)
  winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/o/i)
  let reset = await screen.findByRole('reset')
  fireEvent.click(reset)
});

test('Set X winner Diagonal', async () => {
  render(<App />);
  let winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/winner/i)
  let x = await screen.findByRole('box-0-0')
  let o = await screen.findByRole('box-1-0')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-1-1')
  o = await screen.findByRole('box-1-2')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-2-2')
  o = await screen.findByRole('box-0-2')
  fireEvent.click(x)
  fireEvent.click(o)
  winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/x/i)
  let reset = await screen.findByRole('reset')
  fireEvent.click(reset)
});

test('Set O winner Diagonal', async () => {
  render(<App />);
  let winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/winner/i)
  let x = await screen.findByRole('box-0-1')
  let o = await screen.findByRole('box-2-2')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-2-1')
  o = await screen.findByRole('box-1-1')
  fireEvent.click(x)
  fireEvent.click(o)
  x = await screen.findByRole('box-0-2')
  o = await screen.findByRole('box-0-0')
  fireEvent.click(x)
  fireEvent.click(o)
  winner = await screen.findByRole('winner')
  expect(winner).toHaveTextContent(/o/i)
  let reset = await screen.findByRole('reset')
  fireEvent.click(reset)
});