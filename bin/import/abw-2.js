#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { approximateCurvesFromStops } from '../../lib/utils/color.js'

const infile  = 'config/source/abw-2.json'
const outfile = 'config/palette/abw-2.json'
const name    = 'abw-2'
const comment = 'Palette #2 created by Andy Wardley'
const source  = ''
const root    = bin().up(2)
const colors  = await root.file(infile, { codec: 'auto' }).read()

const ranges = colors.ranges
Object.entries(ranges).reduce(
  (ranges, [ , range]) => {
    range.curves = approximateCurvesFromStops(range.stops)
    return ranges
  },
  { }
)
await root
  .file(outfile, { codec: 'auto' })
  .write({ name, comment, source, ranges })

console.log(`Output written to ${outfile}`)
