import React from 'react';
import { render } from 'react-testing-library';
import GameInfo from '../../components/GameInfo';

it('GameInfo component should render correctly', () => {
  const { container } = render(<GameInfo />);
  expect(container).toMatchSnapshot();
});
