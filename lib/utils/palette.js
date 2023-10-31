import { now } from '@abw/badger-timestamp'
import { nameToURI, newName } from './names.js'
import { multiSort } from '@abw/badger-utils'

export const rangeSort = multiSort('greyscale:bool hue:int')

export function newPaletteName(palettes={}, options={ }) {
  return newName(
    palettes,
    { prefix: 'Palette', ...options}
  )
}

export function newPalette(palettes={}, options) {
  const name = newPaletteName(palettes, options)
  const uri  = nameToURI(name)
  const palette = {
    name,
    uri,
    comment: `Palette created ${now().stamp()}`,
    ranges: { }
  }
  return palette
}

export function copyPalette(palette, palettes={}) {
  const name = newPaletteName(palettes, { prefix: palette.name })
  const uri  = nameToURI(name)
  const newPalette = {
    ...palette,
    name,
    uri,
    comment: `Palette cloned from ${palette.name} ${now().stamp()}`,
  }
  return newPalette
}

export function addPalette(palette, palettes={}) {
  const name = newPaletteName(palettes, { prefix: palette.name })
  const uri  = nameToURI(name)
  const newPalette = {
    ...palette,
    name,
    uri,
  }
  return newPalette
}

export function sortRanges(ranges) {
  return Object.values(ranges)
    .map(
      range => {
        range.hue = range.stops[50].h
        return range
      }
    )
    .sort(rangeSort)
    .reduce(
      (ranges, range) => {
        ranges[range.uri] = range
        return ranges
      },
      { }
    )
}
