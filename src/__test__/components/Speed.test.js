import React from 'react';
import { render } from 'react-testing-library';
import Speed from '../../components/Speed';

it('Speed component should render correctly', () => {
  const { container } = render(<Speed>5</Speed>);
  expect(container).toMatchSnapshot();
});
