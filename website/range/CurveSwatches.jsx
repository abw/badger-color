import React from 'react'
import Swatch from '../color/Swatch.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { usePalette } from '../palette/Context.jsx'
import { useRange } from '../range/Context.jsx'

const CurveSwatches = () => {
  const { options } = usePalette()
  const { hslAtStop } = useRange()
  return (
    <div className="swatches">
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        n =>
          <Swatch
            key={n}
            stop={n}
            color={hslAtStop(n)}
          />
      )}
    </div>
  )
}

export default CurveSwatches
