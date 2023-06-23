import React from 'react'
import { Swatch, Black, White } from '../color/index.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { Consumer } from '../palettes/Context.jsx'

const StopSwatches = ({
  options,
  range,
  toggleLock
}) =>
  <div className="swatches">
    { options.blackWhite && <Black/>}
    { numberRange(0, 100, options.show5s ? 5 : 10).map(
      n =>
        <Swatch
          key={n}
          stop={n}
          color={range.stops[n]}
          clickable={true}
          onClick={() => toggleLock(n)}
          lockable={true}
        />
    )}
    { options.blackWhite && <White/>}
  </div>

export default Consumer(StopSwatches)