import React from 'react';
import { render } from 'react-testing-library';
import Dot from '../../components/Dot';
import { RED } from '../../styles/colors';

it('Dot component should render correctly', () => {
  const { container } = render(<Dot radius={5} backgroundColor={RED} left={100} top={100} />);
  expect(container).toMatchSnapshot();
});
