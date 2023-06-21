import React from 'react'
import { usePalette } from '../palette/Context.jsx'
import { range as numberRange } from '@abw/badger-utils'
import Swatch from '../color/Swatch.jsx'
import { usePalettes } from '../palettes/Context.jsx'

const Swatches = ({range}) => {
  const { options } = usePalettes()
  const { editRange } = usePalette()

  return (
    <div className="swatches" onClick={() => editRange(range.name)}>
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
  )
}

export default Swatches