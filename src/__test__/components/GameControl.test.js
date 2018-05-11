import React from 'react';
import { render } from 'react-testing-library';
import GameControl from '../../components/GameControl';

it('GameControl component Paused State should render correctly', () => {
  const { container } = render(<GameControl gameState={'Paused'} />);
  expect(container).toMatchSnapshot();
});

it('GameControl component Playing State should render correctly', () => {
  const { container } = render(<GameControl gameState={'Playing'} />);
  expect(container).toMatchSnapshot();
});

it('GameControl component Game Over State should render correctly', () => {
  const { container } = render(<GameControl gameState={'Game Over'} />);
  expect(container).toMatchSnapshot();
});
