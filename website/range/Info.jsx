import React from 'react'
import { usePalette } from '../palette/Context.jsx'
import { useRange } from './Context.jsx'
import { range as numberRange } from '@abw/badger-utils'

const Info = () => {
  const {
    options
  } = usePalette()
  const {
    range,
    toggleEditing
  } = useRange()

  return (
    <div className="info">
      <div className="swatches" onClick={toggleEditing}>
        { numberRange(0, 100, options.show5s ? 5 : 10).map(
          stop => {
            const color = range.stops[stop]
            return (
              <div className="details" key={stop}>
                <div className="stop">{stop}</div>
                <div className="specs">
                  h:{color.h}&deg;<br/>
                  s:{color.s}%<br/>
                  l:{color.l}%
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Info