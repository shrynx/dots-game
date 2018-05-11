import generateRandomDotData, { generateRandomColor } from '../../utils/random';
import { YELLOW, RED, CYAN, MAGENTA, GREEN } from '../../styles/colors';

test('generated dot data should have required keys', () => {
  const randDomDotData = generateRandomDotData();

  expect(Object.keys(randDomDotData)).toEqual(
    expect.arrayContaining(['backgroundColor', 'radius', 'left', 'top']),
  );
});

test('should check the constraints of random dot', () => {
  global.innerWidth = 500;

  const { backgroundColor, radius, left, top } = generateRandomDotData();

  const regex = new RegExp(`(${[YELLOW, RED, CYAN, MAGENTA, GREEN].join('|')})`);

  expect(backgroundColor).toMatch(regex);
  expect(radius).toBeGreaterThanOrEqual(10);
  expect(radius).toBeLessThanOrEqual(100);
  expect(top).toBeGreaterThanOrEqual(-110);
  expect(top).toBeLessThanOrEqual(-10);
  expect(left).toBeGreaterThanOrEqual(0);
  expect(left).toBeLessThanOrEqual(490);
});

test('should generate green color', () => {
  global.Math = {
    random: () => 0.1,
  };

  const color = generateRandomColor();
  expect(color).toBe(GREEN);
});

test('should generate magenta color', () => {
  global.Math = {
    random: () => 0.3,
  };

  const color = generateRandomColor();
  expect(color).toBe(MAGENTA);
});

test('should generate cyan color', () => {
  global.Math = {
    random: () => 0.5,
  };

  const color = generateRandomColor();
  expect(color).toBe(CYAN);
});

test('should generate red color', () => {
  global.Math = {
    random: () => 0.7,
  };

  const color = generateRandomColor();
  expect(color).toBe(RED);
});

test('should generate yellow color', () => {
  global.Math = {
    random: () => 0.9,
  };

  const color = generateRandomColor();
  expect(color).toBe(YELLOW);
});
