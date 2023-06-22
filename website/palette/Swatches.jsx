import React from 'react'
import Swatch from '../color/Swatch.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { Consumer } from '../palettes/Context.jsx'
import { URLS } from '../site/URLS.jsx'
import Link from '../site/Link.jsx'

const Swatches = ({palette, uri, range, options}) => {
  return (
    <Link to={URLS.palette.range(palette.uri, uri)}>
      <div className="swatches">
        { numberRange(0, 100, options.show5s ? 5 : 10).map(
          stop =>
            <Swatch
              key={stop}
              stop={stop}
              color={range.stops[stop]}
              clickable={true}
            />
        )}
      </div>
    </Link>
  )
}

export default Consumer(Swatches)