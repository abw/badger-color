import { splitList } from '@abw/badger-utils'
import { exportStops, hslToCSS, whereHTML, where } from '../utils.js'

export async function exportSCSSRange({
  palette,
  uri,
  range,
  output,
  includeCSSVars=false
}) {
  const { name, aliases, stops } = range
  const file      = output.file(`${uri}.scss`)
  const minLength = uri.length + 5
  const stop50    = stops[50]
  const stopCols  = exportStops({ range })
  // const padUri = `${uri}:`.padEnd(minLength)
  // const padHue = `${uri}-hue:`.padEnd(minLength)

  // SCSS variable defining base hue, e.g.
  // $red-hue: 5 !default;
  const hueName = `$${uri}-hue`
  const baseHue = stop50.h
  const huePad  = `${hueName}:`.padEnd(minLength)
  const hueDef  = `${huePad} ${baseHue} !default;`

  // SCSS variables for each stop, e.g.
  // $red-50: hsl($red-hue 60% 55%) !default;
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

  // SCSS map of color range stops, e.g.
  // $red-range: {
  //   '0':   $red-0,
  //   '5':   $red-5,
  //   ...etc...
  //   '95':  $red-95,
  //   '100': $red-100,
  // }
  const scssRange = Object.keys(stops).map(
    stop => {
      const padStop = `'${stop}':`.padEnd(6)
      return `  ${padStop} $${uri}-${stop},`
    }
  ).join('\n')
  const rangeMap = `$${uri}-range: (\n${scssRange}\n) !default;`

  // CSS variables for each color stop, defined by SCSS variable, e.g.
  // :where(html) {
  //   --red-0:   #{$red-0};
  //   --red-5:   #{$red-5};
  //   ...etc...
  //   --red-95:  #{$red-95};
  //   --red-100: #{$red-100};
  // }
  const cssVars = whereHTML(
    Object.keys(stopCols).map(
      name => {
        const padded = `${name}:`.padEnd(minLength)
        return `  --${padded} #{$${name}};`
      }
    ).join('\n')
  )

  // list of dotted CSS classes for range URI and any aliases,
  // e.g. .red, .error, .invalid
  const cssClasses = [ uri, ...splitList(aliases) ]
    .map( alias => `.${alias}` )
    .join(', ')

  // CSS variable aliases in the above scopes, e.g.
  // :where(.red, .error, .invalid) {
  //   --color-0:   var(--red-0);
  //   --color-5:   var(--red-5);
  //   --color-95:  var(--red-95);
  //   --color-100: var(--red-100);
  // }
  const cssMaps = where(
    cssClasses,
    Object.keys(stops)
      .map(
        stop => {
          const padded = `color-${stop}:`.padEnd(10)
          return `  --${padded} var(--${uri}-${stop});`
        }
      )
      .join('\n')
  )

  const lines   = [
    `// ${palette.name} - ${name}`,
    `${hueDef}`,
    scssVars,
    '',
    rangeMap
  ]
  if (includeCSSVars) {
    lines.push(
      '',
      cssVars,
      '',
      cssMaps,
    )
  }
  const text = lines.join('\n')

  await file.write(text)
  return file
}


