#!/usr/bin/env node
import { exportSCSSPalette, openOutputDir, readConfigFile } from '../../lib/index.js'

const paletteFile = 'config/palette/badger-css.json'
const outputDir   = 'export/badger2'
const palette = await readConfigFile(paletteFile)
const output  = await openOutputDir(outputDir)

console.log(`Exporting ${paletteFile} to ${outputDir}`)
await exportSCSSPalette({ palette, output })

