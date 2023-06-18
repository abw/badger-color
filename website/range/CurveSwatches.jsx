import React from 'react'
import Swatch from '../color/Swatch.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { usePalette } from '../palette/Context.jsx'
import { useRange } from '../range/Context.jsx'

const CurveSwatches = () => {
  const { options } = usePalette()
  const { range, hslAtStop, curvesToStop } = useRange()
  return (
    <div className="swatches">
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        n =>
          <Swatch
            key={n}
            stop={n}
            color={hslAtStop(n)}
            // onClick={() => range.stops[n].locked ? toggleLock(n) : curvesToStop(n)}
            onClick={range.stops[n].locked ? null : () => curvesToStop(n)}
            copyable={true} clickable={true}
            copyIcon={range.stops[n].locked ? 'lock' : 'arrow-up'}
          />
      )}
    </div>
  )
}

export default CurveSwatches
