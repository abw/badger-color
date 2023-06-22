import React from 'react'
import Checkbox from '../ui/Checkbox.jsx'
import { Consumer } from './Context.jsx'

const Options = ({
  options,
  toggleNames,
  // toggleStops,
  toggleInfo,
  toggleShow5s,
  toggleGrey
}) =>
  <div className="options">
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
    {/*
    <Checkbox
      label="Show Stops"
      checked={options.stops}
      toggle={toggleStops}
    />
    */}
    <Checkbox
      label="Show 5s"
      checked={options.show5s}
      toggle={toggleShow5s}
    />
    <Checkbox
      label="Greyscale"
      checked={options.grey}
      toggle={toggleGrey}
    />
  </div>

export default Consumer(Options)