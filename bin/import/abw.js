#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { addHexToStops, approximateCurvesFromStops, interpolate5Stops } from '../../lib/utils/color.js'

const infile  = 'config/source/abw.json'
const outfile = 'config/palette/abw.json'
const name    = 'abw'
const comment = 'Palette created by Andy Wardley'
const source  = ''
const root    = bin().up(2)
const colors  = await root.file(infile, { codec: 'auto' }).read()

const ranges = colors.ranges
Object.entries(ranges).reduce(
  (ranges, [ , range]) => {
    range.curves = approximateCurvesFromStops(range.stops)
    interpolate5Stops(range.stops)
    addHexToStops(range.stops)
    return ranges
  },
  { }
)
await root
  .file(outfile, { codec: 'auto' })
  .write({ name, comment, source, ranges })

console.log(`Output written to ${outfile}`)
