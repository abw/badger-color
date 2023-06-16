export const clamper = (min, max) => n =>
  Math.min(Math.max(n, min), max)
