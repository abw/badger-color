import React from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { useEditor } from './Context.jsx'

const Lightness = ({title='Lightness'}) => {
  const {
    lMin, setLMin,
    lMax, setLMax,
    lControl1, setLControl1,
    lControl2, setLControl2,
    lResetCurve, lResetStops,
    lCurveToStops,
    stops, setStopL
  } = useEditor()

  return (
    <CurveEditor
      title={title}
      min={lMin} setMin={setLMin}
      max={lMax} setMax={setLMax}
      control1={lControl1} setControl1={setLControl1}
      control2={lControl2} setControl2={setLControl2}
      resetCurve={lResetCurve}
      resetStops={lResetStops}
      curveToStops={lCurveToStops}
      stops={stops} setStop={setStopL}
      item='l'
    />
  )
}

export default Lightness
