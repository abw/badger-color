import React, { useState } from 'react'
import Editor from '../editor/index.jsx'

const Range = ({range, options}) => {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const toggleOpen = () => setOpen(! open)
  const toggleEditing = () => setEditing(! editing)
  return (
    <div className="range">
      { (options.names || open) &&
        <h2>{range.name}</h2>
      }
      { editing && <h3>Current</h3> }
      <div className="swatches" onClick={toggleOpen}>
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
      { open &&

}
      { editing &&
        <Editor
          range={range}
          options={options}
          toggleEditing={toggleEditing}
        />
      }
    </div>
  )
}

export default Range