import React from 'react'
import { usePalette } from '../palette/Context.jsx'
import { useRange } from './Context.jsx'
import { range as numberRange } from '@abw/badger-utils'
import Swatch from '../color/Swatch.jsx'

const Swatches = () => {
  const {
    options
  } = usePalette()
  const {
    range,
    toggleOpen
  } = useRange()

  return (
    <div className="swatches" onClick={toggleOpen}>
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        stop =>
          <Swatch
            key={stop}
            stop={stop}
            color={range.stops[stop]}
            showInfo={options.info}
          />
      )}
    </div>
  )
}

export default Swatches