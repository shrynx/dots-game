// @flow
import { YELLOW, RED, CYAN, MAGENTA, GREEN } from '../styles/colors';
import { maxLeftPosition } from './calc';

export const generateRandomColor = () => {
  const randomNumber = Math.random();
  switch (true) {
    case randomNumber > 0.8:
      return YELLOW;
    case randomNumber > 0.6:
      return RED;
    case randomNumber > 0.4:
      return CYAN;
    case randomNumber > 0.2:
      return MAGENTA;
    default:
      return GREEN;
  }
};

const generateRandomRadius = () => Math.floor(Math.random() * 90) + 10;

const generateRandomTopPosition = (radius: number) =>
  (Math.floor(Math.random() * 10) + radius) * -1;

const generateRandomLeftPosition = (radius: number) =>
  Math.floor(Math.random() * maxLeftPosition(radius));

const generateRandomDotData = () => {
  const backgroundColor = generateRandomColor();
  const radius = generateRandomRadius();
  const left = generateRandomLeftPosition(radius);
  const top = generateRandomTopPosition(radius);

  return {
    backgroundColor,
    radius,
    left,
    top,
  };
};

export default generateRandomDotData;
