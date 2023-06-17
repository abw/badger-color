// Utility function to import colors in the format used by Tailwind.css
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
import { clamp100 } from '../utils/math.js'
import { approximateCurvesFromStops, colorToHSL, interpolate5Stops } from '../utils/color.js'

export function convertAllTailwindRangesToHSL(ranges, options) {
  return Object.entries(ranges).reduce(
    (ranges, [name, swatches]) => {
      ranges[name] = convertTailwindRangeToHSL(name, swatches, options)
      return ranges
    },
    { }
  )
}

export function convertTailwindRangeToHSL(name, swatches, options) {
  const range = {
    name,
    stops: { }
  }
  Object.entries(swatches).forEach(
    ([stop, color]) => {
      // convert tailwind stops to a lightness stop percentage
      // from: 50 (lightest) -> 950 (darkest)
      // to:   95 (lightest) ->   5 (darkest)
      const n = 100 - parseInt(stop) / 10
      const { h, s, l } = colorToHSL(color)
      range.stops[n] = {
        hex: color,
        h, s, l
      }
    }
  )
  addTailwindEndStops(range.stops)
  interpolate5Stops(range.stops)
  range.curves = approximateCurvesFromStops(range.stops, options)
  return range
}

export function addTailwindEndStops(stops) {
  const stop5  = stops[5]
  const stop10 = stops[10]
  const stop90 = stops[90]
  const stop95 = stops[95]
  stops[0] = {
    h: stop5.h,
    s: clamp100(stop5.s - (stop10.s - stop5.s)),
    l: clamp100(stop5.l - (stop10.l - stop5.l)),
  }
  stops[100] = {
    h: stop95.h,
    s: clamp100(stop95.s + (stop95.s - stop90.s)),
    l: clamp100(stop95.l + (stop95.l - stop90.l)),
  }
  return stops
}
