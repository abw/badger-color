import { setHex } from './color.js'
import { rangeSort } from './palette.js'

const PALETTE_APP = 'badger-color-palette-app'

function LocalStorage() {
  let store = {}
  return {
    clear: () => (store = {}),
    getItem: (key) => store[key],
    setItem: (key, value) => (store[key] = value),
    removeItem: (key) => delete store[key],
  }
}
export const Store =
  (typeof window !== 'undefined' && window.localStorage) || LocalStorage()

export function loadData(item, defvalue={ }) {
  const data = Store.getItem(item)
  return data
    ? JSON.parse(data)
    : defvalue
}

export function saveData(item, value) {
  Store.setItem(item, JSON.stringify(value))
}

export const savePaletteApp = app =>
  saveData(PALETTE_APP, app)

export const loadPaletteApp = () =>
  unpackPaletteApp(
    loadData(PALETTE_APP, { palettes: { } })
  )

export const unpackPaletteApp = app => {
  unpackPalettes(app.palettes)
  return app
}

export const unpackPalettes = palettes => {
  Object.entries(palettes).forEach(
    ([uri, palette]) => {
      palette.uri = uri
      palette.ranges = unpackRanges(palette.ranges)
    }
  )
}

export const unpackRanges = ranges => {
  return Object.entries(ranges)
    .map(
      ([uri, range]) => {
        range.uri ||= uri
        range.hue = range.stops[50].h
        unpackStops(range.stops)
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

export const unpackStops = stops => {
  Object.entries(stops).forEach(
    ([ , color]) => {
      setHex(color)
    }
  )
}

