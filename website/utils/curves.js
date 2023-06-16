export function bias(time,b) {
  return (time / ((((1.0 / b) - 2.0) * (1.0 - time)) + 1.0))
}

export function gain(time,g) {
  return time < 0.5
    ? bias(time * 2.0, g) / 2.0
    : bias(time * 2.0 - 1.0, 1.0 - g) / 2.0 + 0.5
}

export function bezier(t, initial, p1, p2, final) {
  return (1 - t) * (1 - t) * (1 - t) * initial +
    3 * (1 - t) * (1 - t) * t * p1 +
    3 * (1 - t) * t * t * p2 +
    t * t * t * final
}

// Quick hack: binary search to find input time to bezier curve that matches
// the desired x value to a given accuracy (or close enough if it exceeds the
// iteration limit)
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
