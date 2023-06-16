export const clamper = (min, max) => n =>
  Math.min(Math.max(n, min), max)

export const clamp100 = clamper(0, 100)
export const clamp360 = clamper(0, 360)
export const circular = n => (n + 360) % 360
