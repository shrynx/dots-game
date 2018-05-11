// @flow
import styled from 'styled-components';

type Props = {
  radius: number,
  backgroundColor: string,
  left: number,
  top: number,
};

const Dot = styled.button.attrs({
  style: ({ radius, backgroundColor, top, left }: Props) => ({
    height: radius,
    width: radius,
    backgroundColor,
    top,
    left,
  }),
})`
  border-radius: 50%;
  opacity: 0.8;
  position: absolute;
  &:hover {
    cursor: cell;
  }
`;

export default Dot;
