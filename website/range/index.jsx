import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'
import Editor from './Editor.jsx'
import CurrentSwatches from './CurrentSwatches.jsx'
import StopSwatches from './StopSwatches.jsx'
import CurveSwatches from './CurveSwatches.jsx'
import Button from '../ui/Button.jsx'

const Range = ({
  range,
  selectRange,
  // resetRange,
  saveRange,
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
      <h2>{range.name}</h2>
      <h3>Current</h3>
      <CurrentSwatches/>
      <div className="flex space end mar-v">
        <h3>Stops</h3>
        <div className="small">
          <Button
            icon="undo"
            color="orange"
            solid
            onClick={resetStops}
          />
          <Button
            icon="arrow-up"
            color="green"
            solid
            className="mar-l-2"
            onClick={saveRange}
          />
        </div>
      </div>
      <StopSwatches/>
      <div className="flex space end mar-v">
        <h3>Curves</h3>
        <div className="small">
          <Button
            icon="undo"
            color="orange"
            solid
            onClick={resetCurves}
          />
          <Button
            icon="arrow-up"
            color="green"
            solid
            className="mar-l-2"
            onClick={curvesToStops}
          />
        </div>
      </div>
      <CurveSwatches/>
      <Editor/>
    </section>
  )
}

export default Consumer(Range)
