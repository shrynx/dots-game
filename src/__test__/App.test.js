import React from 'react';
import { render, Simulate, cleanup } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import App from '../App';

const startMessage = 'Press Start to Play';
const gameOverMessage = 'Game Over';

afterEach(cleanup);

it('App should render without crashing', () => {
  const { unmount } = render(<App />);
  unmount();
});

it('App in begining should display start message', () => {
  const { getByText } = render(<App />);
  expect(getByText(startMessage)).toBeInTheDOM();
});

it('App after start game should not display start message', () => {
  const { queryByText, getByAltText } = render(<App />);

  Simulate.click(getByAltText('play'));
  expect(queryByText(startMessage)).not.toBeInTheDOM();

  Simulate.click(getByAltText('pause'));
  expect(queryByText(startMessage)).not.toBeInTheDOM();
});

it('App on play should start timers', () => {
  jest.useFakeTimers();
  const { queryByText, getByAltText } = render(<App />);

  Simulate.click(getByAltText('play'));
  expect(queryByText(startMessage)).not.toBeInTheDOM();

  expect(setInterval).toBeCalled();
});

it('App on game over should display game over text', () => {
  jest.useFakeTimers();
  global.innerWidth = 100;

  const { queryByText, getByAltText } = render(<App />);

  Simulate.click(getByAltText('play'));
  jest.runTimersToTime(50 * 1000);

  expect(queryByText(gameOverMessage)).toBeInTheDOM();
});

it('App on restart after game over should not have game over text', () => {
  jest.useFakeTimers();
  global.innerWidth = 100;

  const { queryByText, getByAltText } = render(<App />);

  Simulate.click(getByAltText('play'));
  jest.runTimersToTime(50 * 1000);

  expect(queryByText(gameOverMessage)).toBeInTheDOM();
  Simulate.click(getByAltText('restart'));
  expect(queryByText(gameOverMessage)).not.toBeInTheDOM();
});

it('App on clicking the dot should increase score', () => {
  jest.useFakeTimers();
  global.innerWidth = 200;

  const { getByTestId, getByAltText } = render(<App />);

  Simulate.click(getByAltText('play'));
  jest.runTimersToTime(10 * 1000);

  Simulate.click(getByTestId('dot'));

  const score = Number.parseInt(getByTestId('score').innerHTML, 10);

  expect(score).toBeGreaterThan(0);
});

it('App while paused on clicking the dot should not increase score', () => {
  jest.useFakeTimers();
  global.innerWidth = 200;

  const { getByTestId, getByAltText } = render(<App />);

  Simulate.click(getByAltText('play'));
  jest.runTimersToTime(10 * 1000);

  Simulate.click(getByAltText('pause'));

  Simulate.click(getByTestId('dot'));

  expect(getByTestId('score')).toHaveTextContent('0');
});

it('App speed input should lie between 1 and 10', () => {
  const { container } = render(<App />);
  const input = container.querySelector('input');
  const min = input.getAttribute('min');
  const max = input.getAttribute('max');

  expect(min).toBe('1');
  expect(max).toBe('10');
});

it('App on changing speed should affect', () => {
  const { container, getByTestId } = render(<App />);
  const input = container.querySelector('input');

  Simulate.change(input, { target: { value: 10 } });

  expect(getByTestId('speed')).toHaveTextContent('10');
});
