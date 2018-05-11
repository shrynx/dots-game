import React from 'react';
import { render } from 'react-testing-library';
import InGameText from '../../components/InGameText';

it('InGameText component should render correctly', () => {
  const { container } = render(<InGameText>Game Over</InGameText>);
  expect(container).toMatchSnapshot();
});
