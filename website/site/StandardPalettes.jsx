import badgercss  from '../../config/palette/badger-css.json'
import colar    from '../../config/palette/colar.json'
import tailwind from '../../config/palette/tailwind.json'
import { unpackRanges } from '../../lib/utils/storage.js'
import { fail } from '@abw/badger-utils'

export const StandardPalettes = {
  'badger-css': badgercss,
  colar,
  tailwind,
}

export const standardPalette = uri => {
  const palette = StandardPalettes[uri]
    || fail(`Invalid standard palette specified: ${uri}`)
  palette.uri = uri
  unpackRanges(palette.ranges)
  return palette
}


export default StandardPalettes