import React from 'react'
import { usePalette } from '../palette/Context.jsx'
import { useRange } from './Context.jsx'
import { range as numberRange } from '@abw/badger-utils'
import Swatch from '../color/Swatch.jsx'

const Swatches = () => {
  const {
    palette,
    options
  } = usePalette()
  const {
    range,
    toggleEditing
  } = useRange()

  return (
    <div className="swatches" onClick={toggleEditing}>
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        stop => {
          return <Swatch
            key={stop}
            stop={stop}
            color={palette.ranges[range.name].stops[stop]}
            showLock={true}
          />
        }
      )}
    </div>
  )
}

export default Swatches