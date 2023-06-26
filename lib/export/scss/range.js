import { splitList } from '@abw/badger-utils'
import { exportStops, where, whereHTML } from '../utils.js'
import { hslToCSS } from '../../utils/color.js'

export async function exportSCSSRange({
  palette,
  uri,
  range,
  output
}) {
  const { name, aliases, stops } = range
  const file      = output.file(`${uri}.scss`)
  const minLength = uri.length + 5
  const stop50    = stops[50]
  const baseHue   = stop50.h
  const hueName   = `$${uri}-hue`
  const stopCols  = exportStops({ range })
  // const padUri = `${uri}:`.padEnd(minLength)
  // const padHue = `${uri}-hue:`.padEnd(minLength)

  const scssVars   = Object.entries(stops).map(
    ([stop, color]) => {
      const name   = `${uri}-${stop}`
      const padded = `${name}:`.padEnd(minLength)
      const { h, s, l } = color
      const dh = baseHue - h
      const relh = baseHue === h
        ? hueName
        : dh > 0
          ? `${hueName} + ${dh}`
          : `${hueName} - ${Math.abs(dh)}`
      const hsl = hslToCSS({ h: relh, s, l })
      return `$${padded} ${hsl} !default;`
    }
  ).join('\n')

  const cssVars = Object.keys(stopCols).map(
    name => {
      const padded = `${name}:`.padEnd(minLength)
      return `  --${padded} #{$${name}};`
    }
  ).join('\n')

  const cssClasses = [ uri, ...splitList(aliases) ]
    .map( alias => `.${alias}` )
    .join(', ')
  const cssMaps = Object.keys(stops).map(
    stop => {
      const padded = `color-${stop}:`.padEnd(10)
      return `  --${padded} var(--${uri}-${stop});`
    }
  ).join('\n')

  const huePad = `${hueName}:`.padEnd(minLength)
  const hueDef = `${huePad} ${baseHue} !default;`
  const text = [
    `/* ${palette.name} - ${name} */`,
    `${hueDef}`,
    scssVars,
    '',
    whereHTML(cssVars),
    '',
    where(cssClasses, cssMaps),
  ].join('\n')

  await file.write(text)
  return file
}
