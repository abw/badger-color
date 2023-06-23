import React from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { Consumer } from '../palettes/Context.jsx'

const Hue = ({
  title='Hue',
  range,
  setHMin,
  setHMax,
  setHMinControl,
  setHMaxControl,
  setHStop,
  hCurveToStops,
  resetHCurve,
  resetHStops,
  options
}) =>
  <CurveEditor
    title={title}
    min={range.curves.h.min} setMin={setHMin}
    max={range.curves.h.max} setMax={setHMax}
    control1={range.curves.h.minControl} setControl1={setHMinControl}
    control2={range.curves.h.maxControl} setControl2={setHMaxControl}
    stops={range.stops}
    setStop={setHStop}
    resetCurve={resetHCurve}
    resetStops={resetHStops}
    curveToStops={hCurveToStops}
    options={options}
    scale={359}
    item='h'
  />

export default Consumer(Hue)
