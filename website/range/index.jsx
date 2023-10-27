import React, { useEffect } from 'react'
import Editor from './Editor.jsx'
import CurrentSwatches from './CurrentSwatches.jsx'
import StopSwatches from './StopSwatches.jsx'
import CurveSwatches from './CurveSwatches.jsx'
import Button from '../ui/Button.jsx'
import Header from './Header.jsx'
import Theme from '../site/Theme.jsx'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'

const Range = ({
  range,
  selectRange,
  copyRangeToPalette,
  curvesToStops,
  resetCurves,
  resetStops,
}) => {
  const { ruri } = useParams()

  useEffect(
    () => { selectRange(ruri) },
    [ruri]
  )

  if (ruri !== range?.uri) {
    return <div className="loading">Loading...</div>
  }
  return (
    <section className="range">
      <Header/>
      <h3>Current</h3>
      <CurrentSwatches/>
      <div className="flex space end mar-v">
        <h3>Stops</h3>
        <div className="small">
          <Button
            iconLeft="undo"
            text="Stops"
            color={Theme.colors.undo}
            onClick={resetStops}
            data-tooltip="top right"
            aria-label="Reset all stops"
            className="wd-7"
          />
          <Button
            icon="arrow-up"
            color={Theme.colors.commit}
            className="mar-l-2 icon"
            onClick={copyRangeToPalette}
            data-tooltip="top right"
            aria-label="Copy all stops into current range"
          />
        </div>
      </div>
      <StopSwatches/>
      <div className="flex space end mar-v">
        <h3>Curves</h3>
        <div className="small">
          <Button
            iconLeft="undo"
            text="Curves"
            color={Theme.colors.undo}
            onClick={resetCurves}
            data-tooltip="top right"
            aria-label="Reset all curves"
            className="wd-7"
          />
          <Button
            icon="arrow-up"
            color={Theme.colors.commit}
            className="mar-l-2 icon"
            onClick={curvesToStops}
            data-tooltip="top right"
            aria-label="Use all curves to set stops"
          />
        </div>
      </div>
      <CurveSwatches/>
      <Editor/>
    </section>
  )
}

export default Consumer(Range)
