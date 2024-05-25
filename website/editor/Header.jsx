import React from 'react'
import { Checkbox } from '@abw/badger-react-ui'
import { Consumer } from './Context.jsx'

const Header = ({
  title,
  showCurve, toggleShowCurve,
  showStops, toggleShowStops,
  snap, toggleSnap
}) =>
  <header className="flex space middle">
    <h3 className="mar-v-none">{title}</h3>
    <div className="options small">
      <Checkbox
        text="Curve"
        checked={showCurve}
        onChange={toggleShowCurve}
      />
      <Checkbox
        text="Stops"
        checked={showStops}
        onChange={toggleShowStops}
      />
      <Checkbox
        text="Snap"
        checked={snap}
        onChange={toggleSnap}
      />
    </div>
  </header>

export default Consumer(Header)
