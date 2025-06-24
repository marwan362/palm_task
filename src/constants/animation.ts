const ANIMATION_DURATION = {
  CIRCLE: 800,
  CHECK: 500,
  DELAY: 600,
};

const SVG_PROPS = {
  width: 100,
  height: 100,
  viewBox: '0 0 100 100',
};

const CIRCLE_PROPS = {
  cx: '50',
  cy: '50',
  fill: '#4CAF50',
  stroke: '#388E3C',
  strokeWidth: '2',
};

const CHECK_PROPS = {
  d: 'M30 50 L45 65 L70 35',
  fill: 'none',
  stroke: 'white',
  strokeWidth: '8',
  strokeDasharray: '100',
};

export { ANIMATION_DURATION, SVG_PROPS, CIRCLE_PROPS, CHECK_PROPS };
