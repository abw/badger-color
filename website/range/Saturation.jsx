import React from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { useRange } from '../range/Context.jsx'

const Saturation = ({title='Saturation'}) => {
  const {
    range,
    setSMin,
    setSMax,
    setSMinControl,
    setSMaxControl,
    setSStop,
    sCurveToStops,
    resetSCurve,
    resetSStops
  } = useRange()

  return (
    <CurveEditor
      title={title}
      min={range.curves.s.min} setMin={setSMin}
      max={range.curves.s.max} setMax={setSMax}
      control1={range.curves.s.minControl} setControl1={setSMinControl}
      control2={range.curves.s.maxControl} setControl2={setSMaxControl}
      stops={range.stops}
      setStop={setSStop}
      resetCurve={resetSCurve}
      resetStops={resetSStops}
      curveToStops={sCurveToStops}
      item='s'
    />
  )
}

export default Saturation
