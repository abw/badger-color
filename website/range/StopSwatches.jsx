import React from 'react'
import Swatch from '../color/Swatch.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { Consumer } from '../palettes/Context.jsx'

const StopSwatches = ({
  options,
  range,
  toggleLock
}) => {
  // const { range, toggleLock } = useRange()
  return (
    <div className="swatches">
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
    </div>
  )
}

export default Consumer(StopSwatches)