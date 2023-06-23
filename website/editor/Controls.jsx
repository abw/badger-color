import React from 'react'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { Consumer } from './Context.jsx'

const Controls = ({
  resetCurve,
  resetStops,
  curveToStops,
}) =>
  <div className="controls flex space small start">
    <div>
      <Button
        text="Curve"
        color="orange"
        iconLeft="undo"
        className="mar-r-2 mar-b-2"
        onClick={resetCurve}
        solid
      />
      <Button
        text="Stops"
        color="orange"
        iconLeft="undo"
        className="mar-b-2"
        onClick={resetStops}
        solid
      />
    </div>
    <Button
      text={<>Curve <Icon name="arrow-right" className="mar-h"/> Stops</>}
      color="blue"
      // iconRight="arrow-up"
      className="mar-b-2"
      onClick={curveToStops}
      solid
    />
  </div>

export default Consumer(Controls)