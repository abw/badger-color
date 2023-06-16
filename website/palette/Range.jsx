import React, { useState } from 'react'
import RangeEditor from './RangeEditor.jsx'

const Range = ({range, options}) => {
  const [editing, setEditing] = useState(false)
  const toggleEditing = () => setEditing(! editing)
  return (
    <div className="range">
      { options.names &&
        <h2>{range.name}</h2>
      }
      <div className="swatches" onClick={toggleEditing}>
        { Object.entries(range.stops).map(
          ([stop, color]) =>
            <div
              className="swatch" key={stop}
              style={{
                backgroundColor: `hsl(${color.h} ${color.s}% ${color.l}%)`,
                color: stop > 50 ? 'black' : 'white'

              }}
            >
              { options.stops &&
                <div className="stop">{stop}</div>
              }
              { options.info &&
                <div className="info">
                  h:{color.h}&deg;<br/>
                  s:{color.s}%<br/>
                  l:{color.l}%
                </div>
              }
            </div>
        )}
      </div>
      { editing &&
        <RangeEditor
          range={range}
          options={options}
          toggleEditing={toggleEditing}
        />
      }
    </div>
  )
}

export default Range