import React from 'react'
import Checkbox from '../ui/Checkbox.jsx'
import { Consumer } from './Context.jsx'

const Header = ({
  title,
  showCurve, toggleShowCurve,
  showStops, toggleShowStops,
  snap, toggleSnap
}) =>
  <header className="flex space center">
    <h3 className="mar-v-none">{title}</h3>
    <div className="options small">
      <Checkbox
        label="Curve"
        checked={showCurve}
        toggle={toggleShowCurve}
      />
      <Checkbox
        label="Stops"
        checked={showStops}
        toggle={toggleShowStops}
      />
      <Checkbox
        label="Snap"
        checked={snap}
        toggle={toggleSnap}
      />
    </div>
  </header>

export default Consumer(Header)
