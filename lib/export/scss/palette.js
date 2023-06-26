import { exportSCSSRange } from './range.js'
import { brightGreen } from '@abw/badger'
import { chunkNames } from '../utils.js'

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
    uris.push(uri)
    const file = await exportSCSSRange({
      palette,
      uri,
      range,
      output: cdir
    })
    if (verbose) {
      console.log(brightGreen(`  ✔︎ Exported ${uri} range to ${file}`))
    }
  }

  // output an index file which imports them all
  if (colorsFile) {
    const cf = output.file(colorsFile)
    const names   = uris.map( uri => `'${uri}'`)
    const cnames  = `$color-names:\n  ${chunkNames(names)} !default;`
    const stops   = Object.keys(palette.ranges[uris[0]].stops).map( stop => `'${stop}'`)
    const cstops  = `$color-stops:\n  ${chunkNames(stops)} !default;`
    const imports = uris.map(
      uri => `@import "${colorDir}/${uri}.scss";`
    ).join('\n')

    await cf.write(
      `${cnames}\n\n${cstops}\n\n${imports}\n`
    )
    if (verbose) {
      console.log(brightGreen(`  ✔︎ Exported palette index file to ${cf}`))
    }
  }
}

