import React from 'react'
import { Checkbox } from '@abw/badger-react-ui'
import { Consumer } from './Context.jsx'

const Options = ({
  options,
  toggleNames,
  toggleInfo,
  toggleShow5s,
  toggleGrey,
  toggleBlackWhite,
  toggleTooltips,
}) =>
  <div className="options">
    <Checkbox
      text="Range Names"
      checked={options.names}
      onChange={toggleNames}
    />
    <Checkbox
      text="Swatch Info"
      checked={options.info}
      onChange={toggleInfo}
    />
    <Checkbox
      text="5 Stops"
      checked={options.show5s}
      onChange={toggleShow5s}
    />
    <Checkbox
      text="Black &amp; White"
      checked={options.blackWhite}
      onChange={toggleBlackWhite}
    />
    <Checkbox
      text="Greyscale"
      checked={options.grey}
      onChange={toggleGrey}
    />
    <Checkbox
      text="Tooltips"
      checked={options.tooltips}
      onChange={toggleTooltips}
    />
  </div>

export default Consumer(Options)