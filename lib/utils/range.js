import { nameToURI, newName } from './names.js'
import { range as numberRange } from '@abw/badger-utils'

const DEFAULT_H     = 200
const DEFAULT_S     = 50
const DEFAULT_MIN_L = 10
const DEFAULT_MAX_L = 98

export function newRangeName(ranges={}, options={ }) {
  return newName(
    ranges,
    { prefix: 'Range', ...options}
  )
}

export function newRange(ranges={}, options={}) {
  const name  = newRangeName(ranges, options)
  const uri   = nameToURI(name)
  const range = {
    name,
    uri,
    stops: createStops(options),
    curves: createCurves(options)
  }
  console.log(`newRange: `, range)

  return range
}

export function copyRange(range, ranges={}) {
  const name = newRangeName(ranges, { prefix: `${range.name} Copy` })
  const uri  = nameToURI(name)
  const newRange = {
    ...range,
    name,
    uri,
  }
  return newRange
}

export function createStops({ h=DEFAULT_H, s=DEFAULT_S }) {
  const lRange = DEFAULT_MAX_L - DEFAULT_MIN_L
  return numberRange(0, 100, 5).reduce(
    (stops, stop) => {
      stops[stop] = {
        h, s, l: Math.round(DEFAULT_MIN_L + lRange * stop / 100)
      }
      return stops
    },
    { }
  )
}

export function createCurves({ h=DEFAULT_H, s=DEFAULT_S }) {
  return {
    h: createCurve(h, h),
    s: createCurve(s, s),
    l: createCurve(DEFAULT_MIN_L, DEFAULT_MAX_L)
  }
}

export function createCurve(min, max) {
  return {
    min: min,
    max: max,
    minControl: {
      x: 30,
      y: min,
    },
    maxControl: {
      x: 70,
      y: max,
    }
  }
}
