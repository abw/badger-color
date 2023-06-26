#!/usr/bin/env node
import { commandLine, exportSCSSPalette } from '../lib/index.js'

async function main() {
  await commandLine({
    name:        'badger-color-scss.js',
    version:     '0.0.1',
    description: 'Generates SCSS configuration files from a palette.',
    generator:   exportSCSSPalette
  })
}

main()