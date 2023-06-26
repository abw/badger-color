import { exportSCSSRange } from './range.js'
import { brightGreen } from '@abw/badger'

export async function exportSCSSPalette({
  palette,
  output,
  verbose,
  colorDir='color',
  colorsFile='colors.scss'
}) {
  const ranges = Object.entries(palette.ranges)
  let uris = [ ]

  // output sub-directory for colors
  const cdir = colorDir
    ? output.dir(colorDir)
    : output

  await cdir.mustExist({ create: true })

  // output each range into its own file
  for (let entry of ranges) {
    const [uri, range] = entry
    range.uri ||= uri
    uris.push(range.uri)
    const file = await exportSCSSRange(range, cdir)
    if (verbose) {
      console.log(brightGreen(`  ✔︎ Exported ${uri} range to ${file}`))
    }
  }

  // output an index file which imports them all
  if (colorsFile) {
    const cf = output.file(colorsFile)
    await cf.write(
      uris.map(
        uri => `@import "${colorDir}/${uri}.scss";`
      ).join('\n')
    )
    if (verbose) {
      console.log(brightGreen(`  ✔︎ Exported palette index file to ${cf}`))
    }
  }
}
