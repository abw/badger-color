import { hslToCSS } from '../utils/color.js'

const WHERE_HTML = ':where(html) {'
const END_BLOCK  = '}'


//--------------------------------------------------------------------------
// SCSS Export
//--------------------------------------------------------------------------

export async function exportPaletteSCSSDir(
  palette,
  dir,
  options={ colorDir: 'color', colorsFile: 'colors.scss' }
) {
  const { colorDir, colorsFile } = options
  const cd = colorDir ? dir.dir(colorDir) : dir
  const ranges = Object.entries(palette.ranges)
  let uris = [ ]

  await cd.mustExist({ create: true })

  // output each range into its own file
  for (let entry of ranges) {
    const [uri, range] = entry
    range.uri ||= uri
    uris.push(range.uri)
    await exportRangeSCSSFile(range, cd)
  }

  // output an index file which imports them all
  if (colorsFile) {
    const cf = dir.file(colorsFile)
    await cf.write(
      uris.map(
        uri => `@import "${colorDir}/${uri}.scss";`
      ).join('\n')
    )
  }
}

export async function exportRangeSCSSFile(range, dir) {
  const { uri } = range
  const file = dir.file(`${uri}.scss`)
  const text = exportRangeSCSSText(range)
  await file.write(text)
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


//--------------------------------------------------------------------------
// CSS Export
//--------------------------------------------------------------------------

export async function exportPaletteCSSDir(
  palette,
  dir,
  options={ colorDir: 'color', colorsFile: 'colors.css' }
) {
  const { colorDir, colorsFile } = options
  const cd = colorDir ? dir.dir(colorDir) : dir
  const ranges = Object.entries(palette.ranges)
  let uris = [ ]
  let lines = [ ]

  await cd.mustExist({ create: true })

  // output each range into its own file
  for (let entry of ranges) {
    const [uri, range] = entry
    range.uri ||= uri
    uris.push(range.uri)
    const more = await exportRangeCSSFile(range, cd)
    lines.push(...more)
  }

  // output an index file which imports them all
  if (colorsFile) {
    const cf = dir.file(colorsFile)
    await cf.write(whereHTMLCSSBlock(lines))
  }
}

export async function exportRangeCSSFile(range, dir) {
  const { uri } = range
  const file = dir.file(`${uri}.css`)
  const lines = exportRangeCSSLines(range)
  await file.write(whereHTMLCSSBlock(lines))
  return lines
}

export function exportRangeCSSLines(range) {
  const { name, uri } = range
  const stop50 = range.stops[50]
  const minLength = uri.length + 6
  const padUri = `--${uri}:`.padEnd(minLength)
  const padHue = `--${uri}-hue:`.padEnd(minLength)
  const lines = Object.entries(range.stops).map(
    ([stop, color]) => {
      const name = `--${uri}-${stop}:`.padEnd(minLength)
      return `  ${name} ${hslToCSS(color)};`
    }
  )
  return [
    `  /* ${name} */`,
    `  ${padUri} ${hslToCSS(stop50)};`,
    `  ${padHue} ${stop50.h};`,
    ...lines,
  ]
}

export function exportRangeCSSItems(range, options={ uri: range.uri }) {
  const { uri } = options
  const stop50 = range.stops[50]
  return Object.entries(range.stops).reduce(
    (items, [stop, color]) => {
      items[`--${uri}-${stop}`] = hslToCSS(color)
      return items
    },
    {
      [`--${uri}`]: hslToCSS(stop50),
      [`--${uri}-hue`]: stop50.h,
    }
  )
}

export function whereHTMLCSSBlock(lines) {
  return [
    WHERE_HTML,
    ...lines,
    END_BLOCK
  ].join('\n')
}
