import { hslToCSS } from '../../utils/color.js'

export async function exportSCSSRange(range, dir) {
  const { uri } = range
  const file = dir.file(`${uri}.scss`)
  const text = exportRangeSCSSText(range)
  await file.write(text)
  return file
}

export function exportRangeSCSSText(range) {
  const { name, uri } = range
  const stop50 = range.stops[50]
  const minLength = uri.length + 6
  const padUri = `${uri}:`.padEnd(minLength)
  const padHue = `${uri}-hue:`.padEnd(minLength)
  const lines = Object.entries(range.stops).map(
    ([stop, color]) => {
      const name = `${uri}-${stop}:`.padEnd(minLength)
      return `$${name} ${hslToCSS(color)} !default;`
    }
  )
  return [
    `// ${name}`,
    `$${padUri} ${hslToCSS(stop50)} !default;`,
    `$${padHue} ${stop50.h} !default;`,
    ...lines,
  ].join('\n')
}

