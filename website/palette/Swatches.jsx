import React from 'react'
import Link from '@/site/Link.jsx'
import { URLS } from '@/site/URLS.jsx'
import { Consumer } from '../palettes/Context.jsx'
import { Swatch, Black, White } from '@/color/index.jsx'
import { range as numberRange } from '@abw/badger-utils'

const Swatches = ({
  palette,
  uri,
  range,
  options
}) =>
  <Link to={URLS.palette.range(palette.uri, uri)}>
    <div className="swatches">
      { options.blackWhite && <Black/> }
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        stop =>
          <Swatch
            key={stop}
            stop={stop}
            color={range.stops[stop]}
            clickable={true}
          />
      )}
      { options.blackWhite && <White/> }
    </div>
  </Link>

export default Consumer(Swatches)