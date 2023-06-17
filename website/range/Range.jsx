import React from 'react'
import Swatches from './Swatches.jsx'
import Editor from './Editor.jsx'
import { useRange } from './Context.jsx'
import { usePalette } from '../palette/Context.jsx'

const Range = () => {
  const { options } = usePalette()
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
          toggleEditing={toggleEditing}
        />
      }
    </div>
  )
}

export default Range
