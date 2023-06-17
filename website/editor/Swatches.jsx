import React from 'react'
import { range as numberRange } from '@abw/badger-utils'
import { useEditor } from './Context.jsx'

const Swatches = () => {
  const {
    stopGap, lMin, lMax, hslAtStop,
    toggleEditing, options
  } = useEditor()
  const showGrey = false
  return (
    <div className="swatches" onClick={toggleEditing}>
      { numberRange(0, 100/stopGap).map(
        i => {
          const n = i * stopGap
          const { h, s, l } = hslAtStop(n)
          const gl = Math.round(lMin + (lMax - lMin) * n / 100)
          return (
            <div key={i}>
              <div
                className="swatch"
                style={{
                  backgroundColor: `hsl(${h} ${s}% ${l}%)`,
                  color: n > 50 ? 'black' : 'white'
                }}
              >
                { options.stops &&
                  <div className="stop">{n}</div>
                }
                { options.info &&
                  <div className="info">
                    h:{h}&deg;<br/>
                    s:{s}%<br/>
                    l:{l}%
                  </div>
                }
              </div>
              { showGrey &&
                <div
                  className="grey swatch"
                  style={{
                    backgroundColor: `hsl(0 0% ${gl}%)`,
                    color: i < 10 ? 'white' : 'black'
                  }}
                >
                  {gl}%
                </div>
              }
            </div>
          )
        }
      )}
    </div>
  )
}

export default Swatches