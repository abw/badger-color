import React from 'react'
import { range as numberRange } from '@abw/badger-utils'
import { useEditor } from './Context.jsx'

const Stops = () => {
  const {
    stopGap, stops, options
  } = useEditor()
  return (
    <div className="swatches">
      { numberRange(0, 100/stopGap).map(
        i => {
          const n = i * stopGap
          const stop = stops[n]
          return  stop
            ? <Stop key={n} n={n} stop={stop} options={options}/>
            : <NoStop key={n} n={n} options={options}/>
        }
      )}
    </div>
  )
}

const Stop = ({n, stop, options}) =>
  <div
    className="swatch"
    style={{
      backgroundColor: `hsl(${stop.h} ${stop.s}% ${stop.l}%)`,
      color: n > 50 ? 'black' : 'white'
    }}
  >
    { options.stops &&
      <div className="stop">{n}</div>
    }
    { options.info &&
      <div className="info">
        h:{stop.h}&deg;<br/>
        s:{stop.s}%<br/>
        l:{stop.l}%
      </div>
    }
  </div>

const NoStop = () =>
  <div
    className="swatch none"
  >
    N/A
  </div>


export default Stops