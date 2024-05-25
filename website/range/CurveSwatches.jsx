import React from 'react'
import { Consumer } from '@/palettes/Context.jsx'
import { Swatch, Black, White } from '@/color/index.jsx'
import { range as numberRange } from '@abw/badger-utils'

const CurveSwatches = ({
  options,
  range,
  hslAtStop,
  curvesToStop
}) =>
  <div className="swatches">
    { options.blackWhite && <Black/>}
    { numberRange(0, 100, options.show5s ? 5 : 10).map(
      n =>
        <Swatch
          key={n}
          stop={n}
          color={hslAtStop(n)}
          copyable={true}
          clickable={true}
          copyIcon={range.stops[n].locked ? 'locked' : 'arrow-up'}
          onClick={range.stops[n].locked ? null : () => curvesToStop(n)}
        />
    )}
    { options.blackWhite && <White/>}
  </div>

export default Consumer(CurveSwatches)
