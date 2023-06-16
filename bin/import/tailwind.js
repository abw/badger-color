#!/usr/bin/env node
import colors from '../../config/source/tailwind.js'
import { bin } from '@abw/badger-filesystem'
import { convertAllTailwindRangesToHSL } from '../../lib/import/tailwind.js'

// Import the Tailwind source colors and convert to our internal format
const outfile = 'config/palette/tailwind.json'
const name    = 'Tailwind'
const comment = 'Gratefully borrowed from Tailwind with minor adaptations to remove deprecation warnings'
const source  = 'https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js'
const root    = bin().up(2)
const ranges  = convertAllTailwindRangesToHSL(colors)

await root
  .file(outfile, { codec: 'auto' })
  .write({ name, comment, source, ranges })

console.log(`Output written to ${outfile}`)

