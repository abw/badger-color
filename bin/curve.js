#!/usr/bin/env node

const curve = bezierCurver(0, 0, 1, 1)

for (let i = 0; i <= 100; i += 10) {
  const j = Math.round(curve(i / 100) * 100)
  console.log(`${i}: ${j}`)
}

function bezierCurver(initial, p1, p2, final) {
  return t =>
    (1 - t) * (1 - t) * (1 - t) * initial +
    3 * (1 - t) * (1 - t) * t * p1 +
    3 * (1 - t) * t * t * p2 +
    t * t * t * final
}

