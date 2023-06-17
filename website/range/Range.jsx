import React from 'react'
import Swatches from './Swatches.jsx'
import Editor from '../editor/index.jsx'
import { useRange } from './Context.jsx'
import { usePalette } from '../palette/Context.jsx'

const Range = () => {
  const {
    options
  } = usePalette()
  const {
    range,
    open,
    editing, toggleEditing
  } = useRange()
  return (
    <div className="range">
      { (options.names || open) &&
        <h2>{range.name}</h2>
      }
      { editing &&
        <h3>Current</h3>
      }
      <Swatches/>
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
