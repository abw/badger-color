import React from 'react'
import { range as numberRange } from '@abw/badger-utils'
import { usePalette } from '../palette/Context.jsx'
import Swatch from '../color/Swatch.jsx'
import { useRange } from '../range/Context.jsx'

const StopSwatches = () => {
  const { options } = usePalette()
  const { range, toggleLock } = useRange()
  return (
    <div className="swatches">
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        n =>
          <Swatch
            key={n}
            stop={n}
            color={range.stops[n]}
            onClick={() => toggleLock(n)}
            lockable={true}
          />
      )}
    </div>
  )
}

export default StopSwatches