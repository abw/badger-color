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
  toggleTooltips,
}) =>
  <div className="options">
    <Checkbox
      label="Range Names"
      checked={options.names}
      toggle={toggleNames}
      className="wide"
    />
    <Checkbox
      label="Swatch Info"
      checked={options.info}
      toggle={toggleInfo}
      className="wide"
    />
    <Checkbox
      label="5 Stops"
      checked={options.show5s}
      toggle={toggleShow5s}
      className="wide"
    />
    <Checkbox
      label="Black &amp; White"
      checked={options.blackWhite}
      toggle={toggleBlackWhite}
      className="wide"
    />
    <Checkbox
      label="Greyscale"
      checked={options.grey}
      toggle={toggleGrey}
      className="wide"
    />
    <Checkbox
      label="Tooltips"
      checked={options.tooltips}
      toggle={toggleTooltips}
      className="wide"
    />
  </div>

export default Consumer(Options)