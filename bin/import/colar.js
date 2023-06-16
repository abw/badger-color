#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { convertColarColorsToTailwind } from '../../lib/import/colar.js'
import { convertAllTailwindRangesToHSL } from '../../lib/import/tailwind.js'

// Import the Colar source colors and convert to our internal format
const infile  = 'config/source/colar.json'
const outfile = 'config/palette/colar.json'
const name    = 'Colar'
const comment = 'Gratefully borrowed from Colar with adaptations to standardise color stops'
const source  = 'https://github.com/fchristant/colar/blob/master/colar/colar.json'
const root    = bin().up(2)
const colors  = await root.file(infile, { codec: 'auto' }).read()
const twcols  = convertColarColorsToTailwind(colors)
const ranges  = convertAllTailwindRangesToHSL(twcols)

await root
  .file(outfile, { codec: 'auto' })
  .write({ name, comment, source, ranges })

console.log(`Output written to ${outfile}`)
