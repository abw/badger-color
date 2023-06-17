import React from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { useRange } from '../range/Context.jsx'

const Hue = ({title='Hue'}) => {
  const {
    range,
    setHMin,
    setHMax,
    setHMinControl,
    setHMaxControl,
    setHStop,
    hCurveToStops,
    resetHCurve,
    resetHStops
  } = useRange()

  return (
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
      scale={359}
      item='h'
    />
  )
}

export default Hue
