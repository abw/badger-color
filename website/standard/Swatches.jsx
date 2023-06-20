import React from 'react'
import { Consumer } from './Context.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { usePalettes } from '../palettes/Context.jsx'
import Swatch from '../color/Swatch.jsx'

const Swatches = ({
  palette,
}) => {
  const { options } = usePalettes()
  const stops = numberRange(100, 0, options.show5s ? -5 : -10)
  return (
    <>
      <div className="swatches">
        { Object.entries(palette.ranges).map(
          ([name, range]) =>
            <div key={`${name}-swatch`}>
              { options.names &&
                <h2 key={`${name}-name`}>{name}</h2>
              }
              <Swatch
                color={range.stops[50]}
                stop={50}
                className="mar-b-2"
              />
            </div>
        )}
      </div>
      { options.stops &&
        <>
          <div className="white mar-t-2">White</div>
          <div className="swatches">
            { Object.entries(palette.ranges).map(
              ([name, range]) =>
                <div key={name}>
                  { stops.map(
                    stop =>
                      <Swatch
                        key={`${name}-${stop}-swatch`}
                        color={range.stops[stop]}
                        stop={stop}
                      />
                  )}
                </div>
            )}
          </div>
          <div className="black mar-b-2">Black</div>
        </>
      }
    </>
  )
}
export default Consumer(Swatches)