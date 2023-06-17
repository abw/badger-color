// Utility function to import colors in the format used by Tailwind.css
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
import { clamp100 } from '../utils/math.js'
import { approximateCurvesFromStops, colorToHSL, hslToHex, interpolate5Stops } from '../utils/color.js'

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

  // It looks like color 5 (950) and 95 (50) are really the end points so
  // instead of doing this:
  //   addTailwindEndStops(range.stops)
  // we'll do this:
  range.stops[0]   = range.stops[5]
  range.stops[100] = range.stops[95]
  delete range.stops[5]
  delete range.stops[95]

  interpolate5Stops(range.stops)
  range.curves = approximateCurvesFromStops(range.stops, options)
  return range
}

export function addTailwindEndStops(stops) {
  // NOT USED
  const stop10 = stops[10]
  const stop20 = stops[20]
  const stop80 = stops[80]
  const stop90 = stops[90]
  stops[0] = {
    h: stop10.h,
    s: clamp100(stop10.s - (stop20.s - stop10.s)),
    l: clamp100(stop10.l - (stop20.l - stop10.l)),
  }
  stops[0].hex = hslToHex(stops[0])
  stops[100] = {
    h: stop90.h,
    s: clamp100(stop90.s + (stop90.s - stop80.s)),
    // l: clamp100(stop90.l + (stop90.l - stop80.l)),
    l: clamp100(Math.round((stop90.l + 100) / 2)),
  }
  stops[100].hex = hslToHex(stops[100])
  return stops
}
