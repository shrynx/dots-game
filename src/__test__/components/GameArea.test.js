import React from 'react';
import { render } from 'react-testing-library';
import GameArea from '../../components/GameArea';

it('GameArea component should render correctly', () => {
  const { container } = render(<GameArea />);
  expect(container).toMatchSnapshot();
});
