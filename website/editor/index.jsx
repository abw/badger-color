import React from 'react'
import Hue from './Hue.jsx'
import Saturation from './Saturation.jsx'
import Lightness from './Lightness.jsx'
import Swatches from './Swatches.jsx'
import { Provider } from './Context.jsx'
import Stops from './Stops.jsx'

const Editor = ({range, toggleEditing, options={}}) =>
  <Provider range={range} toggleEditing={toggleEditing} options={options}>
    <div className="range-editor">
      <h3>Stops</h3>
      <Stops/>
      <h3>Curve</h3>
      <Swatches/>
      <div className="grid-3 gap-4 stack-desktop mar-t-2">
        <Hue/>
        <Saturation/>
        <Lightness/>
      </div>
    </div>
  </Provider>

export default Editor