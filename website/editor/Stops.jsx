import React from 'react'
import Stop from './Stop.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { Consumer } from './Context.jsx'

const Stops = ({
  stops, showStops, options,
}) =>
  stops && showStops &&
    <g className="stops">
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        stop =>
          <Stop
            key={stop}
            stop={stop}
            color={stops[stop]}
          />
      )}
    </g>

export default Consumer(Stops)