import React from 'react'
import { Consumer } from './Context.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { Swatch, Black, White } from '../color/index.jsx'

const Swatches = ({
  range,
  options
}) =>
  <div className="swatches">
    { options.blackWhite && <Black/> }
    { numberRange(0, 100, options.show5s ? 5 : 10).map(
      stop =>
        <Swatch
          key={stop}
          stop={stop}
          color={range.stops[stop]}
          clickable={false}
        />
    )}
    { options.blackWhite && <White/> }
  </div>

export default Consumer(Swatches)