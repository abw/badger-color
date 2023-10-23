import { fail, isArray } from '@abw/badger-utils'

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

// invert the semanticColors object to collect all keys for each value,
// e.g. { info: 'blue', focus: 'blue' } => { blue: ['info', 'focus'] }
export const invertSemanticColors = semanticColors =>
  Object
    .entries(semanticColors)
    .reduce(
      (cs, [sem, col]) => {
        const list = cs[col] ||= [ ]
        list.push(sem)
        return cs
      },
      { }
    )

// expand all values into array,
// e.g. { foo: 'bar' } => { foo: ['bar'] }
export const listifySelectorValues = selectors =>
  Object
    .entries(selectors)
    .reduce(
      (acc, [key, value]) => {
        acc[key] = isArray(value)
          ? value
          : [value]
        return acc
      },
      { }
    )

export const expandColorScopes = (
  semanticColors,
  selectors
) => {
  const colorSemantics = invertSemanticColors(semanticColors)
  const selectorValues = listifySelectorValues(selectors)
  return Object
    .entries(colorSemantics)
    .reduce(
      (scopes, [color, semantic]) => {
        scopes[color] = semantic
          .flatMap(
            s => selectorValues[s]
              || fail(`Semantic color "${color}" not listed in selectors`)
          )
          .join(', ')
        return scopes
      },
      { }
    )

  /*
  colorScopes={
    blue:   '.info, .focus',
    green:  '.success, .valid',
    orange: '.warning',
    red:    '.error, .invalid',
  },
  */
}