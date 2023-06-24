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
            icon="undo"
            color={Theme.colors.undo}
            solid
            onClick={resetStops}
          />
          <Button
            icon="arrow-up"
            color={Theme.colors.commit}
            solid
            className="mar-l-2"
            onClick={copyRangeToPalette}
          />
        </div>
      </div>
      <StopSwatches/>
      <div className="flex space end mar-v">
        <h3>Curves</h3>
        <div className="small">
          <Button
            icon="undo"
            color={Theme.colors.undo}
            solid
            onClick={resetCurves}
          />
          <Button
            icon="arrow-up"
            color={Theme.colors.commit}
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
