import React, { useState } from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { bezier, bezierInverse } from '../utils/curves.js'
import Swatches from '../editor/Swatches.jsx'
// import StopGap from '../editor/StopGap.jsx'

const RangeEditor = ({range, toggleEditing, options={}}) => {
  const { h, s, l } = range.curves
  const [hMin, setHMin] = useState(h.min)
  const [hMax, setHMax] = useState(h.max)
  const [hControl1, setHControl1] = useState(h.minControl)
  const [hControl2, setHControl2] = useState(h.maxControl)

  const [sMin, setSMin] = useState(s.min)
  const [sMax, setSMax] = useState(s.max)
  const [sControl1, setSControl1] = useState(s.minControl)
  const [sControl2, setSControl2] = useState(s.maxControl)

  const [lMin, setLMin] = useState(l.min)
  const [lMax, setLMax] = useState(l.max)
  const [lControl1, setLControl1] = useState(l.minControl)
  const [lControl2, setLControl2] = useState(l.maxControl)

  const stopGap = options.split5 ? 5 : 10
  // const [stopGap, setStopGapInt] = useState(5)
  // const setStopGap = n => setStopGapInt(parseInt(n))

  const atStop = (stop, min, control1, control2, max) =>
    Math.round(
      bezier(
        bezierInverse(stop, 0, control1.x, control2.x, 100),
        min, control1.y, control2.y, max
      )
    )
  const hAtStop   = stop => atStop(stop, hMin, hControl1, hControl2, hMax)
  const sAtStop   = stop => atStop(stop, sMin, sControl1, sControl2, sMax)
  const lAtStop   = stop => atStop(stop, lMin, lControl1, lControl2, lMax)
  const hslAtStop = stop => ({
    h: hAtStop(stop),
    s: sAtStop(stop),
    l: lAtStop(stop),
  })

  return (
    <div className="range-editor">
      {/* <h3>Computed Curve Swatches</h3> */}
      <Swatches
        stopGap={stopGap}
        lMin={lMin} lMax={lMax}
        hslAtStop={hslAtStop}
        toggleEditing={toggleEditing}
        options={options}
      />
      {/*
      <StopGap
        stopGap={stopGap} setStopGap={setStopGap}
      />
      */}
      <div className="grid-3 gap-4 stack-desktop">
        <div>
          <h2 className="mar-b-none">Hue</h2>
          <CurveEditor
            min={hMin} setMin={setHMin}
            max={hMax} setMax={setHMax}
            control1={hControl1} setControl1={setHControl1}
            control2={hControl2} setControl2={setHControl2}
            range={359}
            stops={range.stops}
            item='h'
          />
        </div>
        <div>
          <h2 className="mar-b-none">Saturation</h2>
          <CurveEditor
            min={sMin} setMin={setSMin}
            max={sMax} setMax={setSMax}
            control1={sControl1} setControl1={setSControl1}
            control2={sControl2} setControl2={setSControl2}
            stops={range.stops}
            item='s'
          />
        </div>
        <div>
          <h2 className="mar-b-none">Lightness</h2>
          <CurveEditor
            min={lMin} setMin={setLMin}
            max={lMax} setMax={setLMax}
            control1={lControl1} setControl1={setLControl1}
            control2={lControl2} setControl2={setLControl2}
            stops={range.stops}
            item='l'
          />
        </div>
      </div>
    </div>
  )
}

export default RangeEditor