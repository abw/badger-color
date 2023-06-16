#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { approximateCurvesFromStops, colorToHSL } from '../../lib/utils/color.js'

const infile  = 'config/source/abw-1.json'
const outfile = 'config/palette/abw-1.json'
const name    = 'abw-1'
const comment = 'Palette #1 created by Andy Wardley'
const source  = ''
const root    = bin().up(2)
const colors  = await root.file(infile, { codec: 'auto' }).read()

const ranges = Object.entries(colors.ranges).reduce(
  (ranges, [name, swatches]) => {
    const range = ranges[name] = { name, stops: { } }
    Object.entries(swatches).forEach(
      ([stop, color]) => {
        const { h, s, l } = colorToHSL(color)
        range.stops[stop] = {
          hex: color,
          h, s, l
        }
      }
    )
    range.curves = approximateCurvesFromStops(range.stops)
    return ranges
  },
  { }
)
await root
  .file(outfile, { codec: 'auto' })
  .write({ name, comment, source, ranges })

console.log(`Output written to ${outfile}`)
