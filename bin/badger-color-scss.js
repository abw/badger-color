#!/usr/bin/env node
import { commandLine, exportSCSSPalette } from '../lib/index.js'

const name        = 'badger-color-scss.js'
const version     = 'PACKAGE_VERSION'
const description = 'Generates SCSS configuration files from a palette.'

async function main() {
  await commandLine({
    name,
    version,
    description,
    generator: exportSCSSPalette
  })
}
main()

