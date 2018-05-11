import React from 'react';
import { render } from 'react-testing-library';
import InfoLabel from '../../components/InfoLabel';

it('InfoLabel component should render correctly', () => {
  const { container } = render(<InfoLabel>SPEED</InfoLabel>);
  expect(container).toMatchSnapshot();
});
