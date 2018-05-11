import React from 'react';
import { render } from 'react-testing-library';
import Score from '../../components/Score';

it('Score component should render correctly', () => {
  const { container } = render(<Score>200</Score>);
  expect(container).toMatchSnapshot();
});
