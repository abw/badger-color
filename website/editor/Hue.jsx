import React from 'react'
import { useEditor } from './Context.jsx'
import CurveEditor from '../bezier/CurveEditor.jsx'

const Hue = ({title='Hue'}) => {
  const {
    hMin, setHMin,
    hMax, setHMax,
    hControl1, setHControl1,
    hControl2, setHControl2,
    hResetCurve, hResetStops,
    hCurveToStops,
    stops, setStopH,
  } = useEditor()

  return (
    <CurveEditor
      title={title}
      min={hMin} setMin={setHMin}
      max={hMax} setMax={setHMax}
      control1={hControl1} setControl1={setHControl1}
      control2={hControl2} setControl2={setHControl2}
      resetCurve={hResetCurve}
      resetStops={hResetStops}
      curveToStops={hCurveToStops}
      range={359}
      stops={stops}
      setStop={setStopH}
      item='h'
    />
  )
}

export default Hue
