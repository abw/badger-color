import React from 'react'
import Hue from './Hue.jsx'
import Saturation from './Saturation.jsx'
import Lightness from './Lightness.jsx'
import StopSwatches from './StopSwatches.jsx'
import CurveSwatches from './CurveSwatches.jsx'
import Controls from './Controls.jsx'
import Swatches from './Swatches.jsx'
import { Consumer } from './Context.jsx'

const Editor = ({ range }) =>
  <div className="range-editor">
    <h2>{range.name}</h2>
    <h3>Current</h3>
    <Swatches/>
    <h3>Stops</h3>
    <StopSwatches/>
    <h3>Curve</h3>
    <CurveSwatches/>
    <div className="grid-3 gap-4 stack-desktop mar-t-2">
      <Hue/>
      <Saturation/>
      <Lightness/>
    </div>
    <Controls/>
  </div>

export default Consumer(Editor)