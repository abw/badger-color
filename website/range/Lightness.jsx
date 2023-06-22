import React from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { Consumer } from '../palettes/Context.jsx'

const Lightness = ({
  title='Lightness',
  range,
  setLMin,
  setLMax,
  setLMinControl,
  setLMaxControl,
  setLStop,
  lCurveToStops,
  resetLCurve,
  resetLStops,
  options
}) =>
  <CurveEditor
    title={title}
    min={range.curves.l.min} setMin={setLMin}
    max={range.curves.l.max} setMax={setLMax}
    control1={range.curves.l.minControl} setControl1={setLMinControl}
    control2={range.curves.l.maxControl} setControl2={setLMaxControl}
    stops={range.stops}
    setStop={setLStop}
    resetCurve={resetLCurve}
    resetStops={resetLStops}
    curveToStops={lCurveToStops}
    options={options}
    item='l'
  />

export default Consumer(Lightness)
