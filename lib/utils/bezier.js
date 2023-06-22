export function bezier(t, initial, p1, p2, final) {
  return (1 - t) * (1 - t) * (1 - t) * initial +
    3 * (1 - t) * (1 - t) * t * p1 +
    3 * (1 - t) * t * t * p2 +
    t * t * t * final
}

// Quick hack: binary search to find input time to bezier curve that matches
// the desired x output value to a given accuracy (or close enough if it
// exceeds the iteration limit)
export function bezierInverse(x, initial, p1, p2, final, accuracy=0.1) {
  let maxTries = 10
  let iter  = 0
  let guess = 0.5
  let delta = 0.25
  // console.log(`bezierInverse looking to match ${x}`);

  while (iter++ <= maxTries) {
    let result = bezier(guess, initial, p1, p2, final)
    let diff   = result - x
    // console.log(`guess ${iter}: ${guess} => ${result}  diff:${diff}`)
    if (Math.abs(diff) <= accuracy) {
      // console.log(`found the result!  ${guess} => ${result}`)
      return guess
    }
    if (result > x) {
      guess -= delta
    }
    else {
      guess += delta
    }
    delta /= 2
  }

  return guess
}

// calculate stop value from a curve
export function stopValueFromCurve(stop, curve) {
  return Math.round(
    bezier(
      bezierInverse(stop, 0, curve.minControl.x, curve.maxControl.x, 100),
      curve.min, curve.minControl.y, curve.maxControl.y, curve.max
    )
  )
}

