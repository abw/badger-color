import { now } from '@abw/badger-timestamp'

export function newPaletteName(palettes={}) {
  let n = 1
  while (n < 1000) {
    const name = `Palette #${n}`
    if (! palettes[nameToURI(name)]) {
      return name
    }
    n++
  }
  throw 'Too many palettes!'
}

export function newPalette(palettes={}) {
  const name = newPaletteName(palettes)
  const uri  = nameToURI(name)
  const palette = {
    name,
    uri,
    comment: `Palette created ${now().stamp()}`,
    ranges: { }
  }
  return palette
}

export function nameToURI(name) {
  return name.replaceAll(/\W+/g, '-').toLowerCase()
}