// @flow
import styled from 'styled-components';
import { PURPLE, GREY } from '../styles/colors';

type Props = {
  value: number,
};

const RangeInput = styled.input`
  appearance: none;
  width: 85%;
  height: 30px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: ${({ value }: Props) =>
      `-webkit-linear-gradient(left,${PURPLE} ${(value - 0.5) * 10}%, ${GREY} 0%`});
    height: 5px;
    border-radius: 3px;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    background-color: ${PURPLE};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    max-width: 80px;
    position: relative;
    bottom: 8px;
    transition: border 1000ms ease;
    cursor: -webkit-grab;
  }
  &::-webkit-slider-thumb:active {
    height: 30px;
    width: 30px;
    bottom: 12px;
    cursor: -webkit-grabbing;
  }
`;

export default RangeInput;
