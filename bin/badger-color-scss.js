#!/usr/bin/env node
import { commandLine, exportSCSSPalette } from '../lib/index.js'

async function main() {
  await commandLine({
    name:        'badger-color-scss.js',
    version:     'PACKAGE_VERSION',
    description: 'Generates SCSS configuration files from a palette.',
    generator:   exportSCSSPalette
  })
}

main()