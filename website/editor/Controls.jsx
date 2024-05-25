import React from 'react'
import Theme from '@/site/Theme.jsx'
import { Consumer } from './Context.jsx'
import { Icon, Button } from '@abw/badger-react-ui'

const Controls = ({
  title,
  resetCurve,
  resetStops,
  curveToStops,
}) =>
  <div className="controls flex space small start">
    <div>
      <Button
        text="Curve"
        color={Theme.colors.undo}
        iconLeft="undo"
        className="mar-r-2 mar-b-2"
        onClick={resetCurve}
        data-tooltip="top left"
        aria-label={`Reset the ${title.toLowerCase()} curve`}
        solid
      />
      <Button
        text="Stops"
        color={Theme.colors.undo}
        iconLeft="undo"
        className="mar-b-2"
        onClick={resetStops}
        data-tooltip="top left"
        aria-label={`Reset the ${title.toLowerCase()} stops`}
        solid
      />
    </div>
    <Button
      text={<>Curve <Icon name="arrow-right" className="mar-h"/> Stops</>}
      color={Theme.colors.commit}
      // iconRight="arrow-up"
      className="mar-b-2"
      onClick={curveToStops}
      data-tooltip="top right"
      aria-label={`Use the ${title.toLowerCase()} curve to set the stops`}
      solid
    />
  </div>

export default Consumer(Controls)