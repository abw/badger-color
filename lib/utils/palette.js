import { now } from '@abw/badger-timestamp'

export function newPaletteName(palettes={}, options={ }) {
  const prefix = options.prefix || 'Palette'
  let n = 1
  while (n < 1000) {
    const name = `${prefix} #${n}`
    if (! palettes[nameToURI(name)]) {
      return name
    }
    n++
  }
  throw 'Too many palettes!'
}

export function newPalette(palettes={}, options) {
  const name = newPaletteName(palettes, options)
  const uri  = nameToURI(name)
  const palette = {
    name,
    uri,
    comment: `Palette created ${now().stamp()}`,
    mutable: true,
    ranges: { }
  }
  return palette
}

export function copyPalette(palette, palettes={}) {
  const name = newPaletteName(palettes, { prefix: `${palette.name} Copy` })
  const uri  = nameToURI(name)
  const newPalette = {
    ...palette,
    name,
    uri,
    comment: `Palette cloned from ${palette.name} ${now().stamp()}`,
    mutable: true,
  }
  return newPalette
}

export function nameToURI(name) {
  return name.replaceAll(/\W+/g, '-').toLowerCase()
}