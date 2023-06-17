import React from 'react'
import Range from '../range/index.jsx'
import Checkbox from '../ui/Checkbox.jsx'
import { usePalette } from './Context.jsx'

const Ranges = () => {
  const {
    palette,
    options,
    toggleNames, toggleInfo, toggleShow5s
  } = usePalette()

  return (
    <div className="ranges">
      <div className="options gap-4 mar-b-4">
        <Checkbox
          label="Show Names"
          checked={options.names}
          toggle={toggleNames}
        />
        <Checkbox
          label="Show Info"
          checked={options.info}
          toggle={toggleInfo}
        />
        <Checkbox
          label="Show 5s"
          checked={options.show5s}
          toggle={toggleShow5s}
        />
      </div>
      { Object.keys(palette.ranges).map(
        name =>
          <Range key={name} name={name}/>
      )}
    </div>
  )
}

export default Ranges