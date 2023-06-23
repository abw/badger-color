import React from 'react'
import Checkbox from '../ui/Checkbox.jsx'
import { Consumer } from './Context.jsx'

const Options = ({
  options,
  toggleNames,
  // toggleStops,
  toggleInfo,
  toggleShow5s,
  toggleGrey,
  toggleBlackWhite,
}) =>
  <div className="options">
    <Checkbox
      label="Range Names"
      checked={options.names}
      toggle={toggleNames}
    />
    <Checkbox
      label="Swatch Info"
      checked={options.info}
      toggle={toggleInfo}
    />
    <Checkbox
      label="Black &amp; White"
      checked={options.blackWhite}
      toggle={toggleBlackWhite}
    />
    <Checkbox
      label="5 Stops"
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