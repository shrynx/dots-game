import {
  incrementDotPosition,
  radiusToPoint,
  maxLeftPosition,
  checkIfDotEscaped,
} from '../../utils/calc';

test('should correctly get points from radius', () => {
  const radius1 = 10;
  const point1 = 10;
  expect(radiusToPoint(radius1)).toBe(point1);

  const radius2 = 50;
  const point2 = 6;
  expect(radiusToPoint(radius2)).toBe(point2);

  const radius3 = 100;
  const point3 = 1;
  expect(radiusToPoint(radius3)).toBe(point3);
});

test('should increment position by one', () => {
  const top = 10;
  const speed = 1;
  const frequency = 100;
  const finalTop = 11;
  expect(incrementDotPosition(top, speed, frequency)).toBe(finalTop);
});

test('should correctly output max left position', () => {
  global.innerWidth = 500;
  const radius = 10;
  expect(maxLeftPosition(radius)).toBe(490);
});

test('should correctly check if dot has escaped', () => {
  global.innerHeight = 500;
  const top1 = 10;
  const top2 = 590;
  expect(checkIfDotEscaped(top1)).toBe(false);
  expect(checkIfDotEscaped(top2)).toBe(true);
});
