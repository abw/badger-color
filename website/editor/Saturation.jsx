import React from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { useEditor } from './Context.jsx'

const Saturation = ({title='Saturation'}) => {
  const {
    sMin, setSMin,
    sMax, setSMax,
    sControl1, setSControl1,
    sControl2, setSControl2,
    sResetCurve, sResetStops,
    sCurveToStops,
    stops, setStopS,
  } = useEditor()

  return (
    <CurveEditor
      title={title}
      min={sMin} setMin={setSMin}
      max={sMax} setMax={setSMax}
      control1={sControl1} setControl1={setSControl1}
      control2={sControl2} setControl2={setSControl2}
      resetCurve={sResetCurve}
      resetStops={sResetStops}
      curveToStops={sCurveToStops}
      stops={stops} setStop={setStopS}
      item='s'
    />
  )
}

export default Saturation
