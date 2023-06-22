import { range } from '@abw/badger-utils'
import chroma from 'chroma-js'
import { stopValueFromCurve } from './bezier.js'
import { range as numberRange } from '@abw/badger-utils'

export function colorToHSL(color) {
  const c = chroma(color)
  const [hue, sat, lig] = c.hsl()
  const h = isNaN(hue) ? 0 : Math.round(hue)
  const s = Math.round(sat * 100)
  const l = Math.round(lig * 100)
  return { h, s, l }
}

export function hslToChroma(hsl) {
  const { h, s, l } = hsl
  return chroma.hsl(h, s / 100, l / 100)
}

export function hslToHex(hsl) {
  hslToChroma(hsl).hex()
}

export function hslToLuminance(hsl) {
  return hslToChroma(hsl).luminance()
}

export function hslToGrey(hsl) {
  const l = hslToChroma(hsl).luminance()
  return chroma.hsl(0, 0, l).hex()
}

export function hslToCSS(hsl) {
  return `hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)`
}

export function approximateCurvesFromStops(stops, options={}) {
  const { bezierX1=30, bezierX2=70 } = options
  // guesstimate a bezier curve for each of h, s and l
  return ['h', 's', 'l'].reduce(
    (curves, item) => {
      curves[item] = {
        min: stops[0][item],
        max: stops[100][item],
        minControl: {
          x: bezierX1,
          y: stops[bezierX1][item]
        },
        maxControl: {
          x: bezierX2,
          y: stops[bezierX2][item]
        }
      }
      return curves
    },
    { }
  )
}

export function interpolate5Stops(stops) {
  range(0, 90, 10).forEach(
    n => {
      const a = stops[n]
      const b = stops[n + 10]
      stops[n + 5] ||= ['h', 's', 'l'].reduce(
        (stop, i) => {
          stop[i] = Math.round((a[i] + b[i]) / 2)
          return stop
        },
        { }
      )
      stops[n + 5].hex ||= hslToHex(stops[n + 5])
    }
  )
}

export function addHexToStops(stops) {
  Object.entries(stops).forEach(
    ([ , stop]) => stop.hex ||= hslToHex(stop)
  )
}

export function setHex(stop) {
  stop.hex = hslToHex(stop)
  return stop
}

// calculate h/s/l stop values from a curve
export const hStopValueFromRange = (stop, range) => stopValueFromCurve(stop, range.curves.h)
export const sStopValueFromRange = (stop, range) => stopValueFromCurve(stop, range.curves.s)
export const lStopValueFromRange = (stop, range) => stopValueFromCurve(stop, range.curves.l)
export const hslAtStopFromRange  = (stop, range) => setHex({
  h: hStopValueFromRange(stop, range),
  s: sStopValueFromRange(stop, range),
  l: lStopValueFromRange(stop, range),
})

// calculate all stops from curves
export const stopsFromCurves = curves =>
  numberRange(0, 100, 5).reduce(
    (stops, stop) => {
      stops[stop] = hslAtStopFromRange(stop, { curves })
      return stops
    },
    { }
  )
