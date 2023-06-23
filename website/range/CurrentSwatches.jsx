import React from 'react'
import { Swatch, Black, White } from '../color/index.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { Consumer } from '../palettes/Context.jsx'

const Swatches = ({
  palette, range, options
}) =>
  <div className="swatches">
    { options.blackWhite && <Black/>}
    { numberRange(0, 100, options.show5s ? 5 : 10).map(
      stop => {
        return <Swatch
          key={stop}
          stop={stop}
          color={palette.ranges[range.uri].stops[stop]}
          showLock={true}
        />
      }
    )}
    { options.blackWhite && <White/>}
  </div>

export default Consumer(Swatches)