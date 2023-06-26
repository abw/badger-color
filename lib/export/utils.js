import { hslToCSS } from '../utils/color.js'

export function exportStops({
  range,
  uri=range.uri
}) {
  return Object.entries(range.stops).reduce(
    (stops, [stop, color]) => {
      const [name, hsl] = exportStop(uri, stop, color)
      stops[name] = hsl
      return stops
    },
    { }
  )
}

export const exportStop = (uri, stop, color) =>
  [`${uri}-${stop}`, hslToCSS(color)]

export const where = (selector, text) =>
  `:where(${selector}) {\n${text}\n}`

export const whereHTML = text =>
  where('html', text)

export const chunk = (array, size) =>
  array.reduce(
    (chunks, _, i) => {
      if (i % size === 0) {
        chunks.push(array.slice(i, i + size))
      }
      return chunks
    },
    []
  )
