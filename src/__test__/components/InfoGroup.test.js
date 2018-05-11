import React from 'react';
import { render } from 'react-testing-library';
import InfoGroup from '../../components/InfoGroup';

it('InfoGroup component should render correctly', () => {
  const { container } = render(<InfoGroup />);
  expect(container).toMatchSnapshot();
});
