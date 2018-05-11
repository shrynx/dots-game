import React from 'react';
import { render } from 'react-testing-library';
import RangeInput from '../../components/RangeInput';

it('RangeInput component should render correctly', () => {
  const { container } = render(<RangeInput value={5} onChange={() => {}} />);
  expect(container).toMatchSnapshot();
});
