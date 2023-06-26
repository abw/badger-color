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

export const hslToCSS = hsl =>
  `hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)`

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

export const chunkNames = (names, n=5) =>
  chunk(names, n)
    .map( chunk => chunk.join(', ') )
    .join(',\n  ')

export const longestName = names =>
  names
    .slice()
    .sort( (a, b) => a.length - b.length )
    .at(-1)
    .length

