#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'
import { exportPaletteCSSDir, exportPaletteSCSSDir } from '../../lib/export/palette.js'

const infile  = 'config/palette/badger2.json'
const outdir  = 'export/badger2'
const root    = bin().up(2)

const palette = await root
  .file(infile, { codec: 'auto' })
  .read()

const scssdir = root.dir(`${outdir}/scss`)
await scssdir.mustExist({ create: true })

const cssdir = root.dir(`${outdir}/css`)
await cssdir.mustExist({ create: true })

// console.log(`palette: `, palette)
console.log(`Exporting SCSS to ${scssdir}`)
await exportPaletteSCSSDir(palette, scssdir)

console.log(`Exporting CSS to ${cssdir}`)
await exportPaletteCSSDir(palette, cssdir)

