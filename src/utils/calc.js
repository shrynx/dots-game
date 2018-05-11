// @flow
// flow doesn't support type on window
// https://github.com/facebook/flow/issues/2255#issuecomment-325832645
declare var window: {
  innerHeight: number,
  innerWidth: number,
};

export const radiusToPoint = (radius: number) => 11 - Math.floor(radius / 10);

export const getWindowHeight = () => window.innerHeight;

export const getWindowWidth = () => window.innerWidth;

export const maxLeftPosition = (radius: number) => getWindowWidth() - radius;

export const incrementDotPosition = (top: number, speed: number, frequency: number) =>
  top + speed * frequency / 100;

export const checkIfDotEscaped = (top: number) => top > getWindowHeight() * 0.75;
