import React, { useState } from 'react'
import Range from './Range.jsx'
import Checkbox from '../ui/Checkbox.jsx'

const Ranges = ({palette}) => {
  const [options, setOptions] = useState({
    names:  false,
    stops:  false,
    info:   false,
    split5: false
  })
  const setOption = (name, value) =>
    setOptions({ ...options, [name]: value })
  const toggleOption = name =>
    setOption(name, ! options[name])
  const toggler = name => () => toggleOption(name)

  return (
    <div className="ranges">
      <div className="options gap-4 mar-b-4">
        <Checkbox
          label="Show Names"
          checked={options.names}
          toggle={toggler('names')}
        />
        <Checkbox
          label="Show Stops"
          checked={options.stops}
          toggle={toggler('stops')}
        />
        <Checkbox
          label="Show Info"
          checked={options.info}
          toggle={toggler('info')}
        />
        <Checkbox
          label="Split 5"
          checked={options.split5}
          toggle={toggler('split5')}
        />
      </div>
      { Object.values(palette.ranges).map(
        range =>
          <Range
            key={range.name} range={range}
            options={options}
          />
      )}
    </div>
  )
}

export default Ranges