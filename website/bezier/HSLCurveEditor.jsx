import React, { useState } from 'react'
import CurveEditor from './CurveEditor.jsx'
import { range } from '@abw/badger-utils'
import { bezier, bezierInverse } from '../utils/curves.js'

// DEPRECATED - moved to ../palette/RangeEdit

const HSLCurveEditor = () => {
  const [hMin, setHMin] = useState(30)
  const [hMax, setHMax] = useState(40)
  const [hControl1, setHControl1] = useState({ x: 70, y: 30 })
  const [hControl2, setHControl2] = useState({ x: 30, y: 40 })

  const [sMin, setSMin] = useState(50)
  const [sMax, setSMax] = useState(90)
  const [sControl1, setSControl1] = useState({ x: 70, y: 60 })
  const [sControl2, setSControl2] = useState({ x: 30, y: 80 })

  const [lMin, setLMin] = useState(10)
  const [lMax, setLMax] = useState(98)
  const [lControl1, setLControl1] = useState({ x: 70, y: 20 })
  const [lControl2, setLControl2] = useState({ x: 30, y: 80 })

  const [stopGap, setStopGap] = useState(5)

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
    <div className="curve-editor">
      <div className="grid-3 gap-4">
        <div>
          <h2 className="mar-b-none">Hue</h2>
          <CurveEditor
            min={hMin} setMin={setHMin}
            max={hMax} setMax={setHMax}
            control1={hControl1} setControl1={setHControl1}
            control2={hControl2} setControl2={setHControl2}
            range={359}
          />
          <div className="grid-2">
            <div>Min: {hMin}</div>
            <div>Max: {hMax}</div>
          </div>
        </div>
        <div>
          <h2 className="mar-b-none">Saturation</h2>
          <CurveEditor
            min={sMin} setMin={setSMin}
            max={sMax} setMax={setSMax}
            control1={sControl1} setControl1={setSControl1}
            control2={sControl2} setControl2={setSControl2}
          />
        </div>
        <div>
          <h2 className="mar-b-none">Lightness</h2>
          <CurveEditor
            min={lMin} setMin={setLMin}
            max={lMax} setMax={setLMax}
            control1={lControl1} setControl1={setLControl1}
            control2={lControl2} setControl2={setLControl2}

          />
        </div>
      </div>
      <div className="swatches">
        { range(0, 100/stopGap).map(
          i => {
            const n = i * stopGap
            const { h, s, l } = hslAtStop(n)
            const gl = Math.round(lMin + (lMax - lMin) * n / 100)
            return (
              <div key={i}>
                <div
                  className="swatch"
                  style={{
                    backgroundColor: `hsl(${h} ${s}% ${l}%)`,
                    color: i < 10 ? 'white' : 'black'
                  }}
                >
                  {n}
                </div>
                <div
                  className="grey"
                  style={{
                    backgroundColor: `hsl(0 0% ${gl}%)`,
                    color: i < 10 ? 'white' : 'black'
                  }}
                >
                  {gl}%
                </div>
                <div className="info">
                  <KeyValue k="H" v={<>{h}&deg;</>}/>
                  <KeyValue k="S" v={`${s}%`}/>
                  <KeyValue k="L" v={`${l}%`}/>
                </div>
              </div>
            )
          }
        )}
      </div>
      <div className="radio-buttons">
        Stop Gap:
        <label>
          <input
            type="radio" name="stop-gap" value="5"
            onChange={e => setStopGap(e.target.value)}
            checked={parseInt(stopGap) === 5}
          /> 5
        </label>
        <label>
          <input
            type="radio" name="stop-gap" value="10"
            onChange={e => setStopGap(e.target.value)}
            checked={parseInt(stopGap) === 10}
          /> 10
        </label>
      </div>
    </div>
  )
}

const KeyValue = ({v}) =>
  <div className="value">{v}</div>


export default HSLCurveEditor