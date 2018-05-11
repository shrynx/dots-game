import React from 'react';
import { render } from 'react-testing-library';
import GameWrapper from '../../components/GameWrapper';

it('GameWrapper component should render correctly', () => {
  const { container } = render(<GameWrapper />);
  expect(container).toMatchSnapshot();
});
