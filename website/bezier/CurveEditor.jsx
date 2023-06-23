import React, { useState, useRef } from 'react'
import ControlPoint from '../bezier/ControlPoint.jsx'
import { range as numberRange } from '@abw/badger-utils'
import Checkbox from '../ui/Checkbox.jsx'
import LockedPoint from './LockedPoint.jsx'
import Button from '../ui/Button.jsx'
import { bezier, bezierInverse, clamper } from '../../lib/utils/index.js'
import Icon from '../ui/Icon.jsx'

const gridLines = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const tPoints = numberRange(0, 100)

const CurveEditor = ({
  title,
  min, setMin,
  max, setMax,
  control1, setControl1,
  control2, setControl2,
  scale=100,
  stops,
  setStop,
  item,
  stopRadius=2,
  stopClass='stop-point',
  resetCurve, resetStops, curveToStops,
  options
}) => {
  const factor = scale / 100
  const svgRef = useRef(null)
  const [showCurve, setShowCurve] = useState(true)
  const [showStops, setShowStops] = useState(true)
  const [snap, setSnap] = useState(true)
  const [stopX, setStopX] = useState(50)
  const stopTime = bezierInverse(stopX, 0, control1.x, control2.x, 100)
  const stopY = bezier(stopTime, min, control1.y, control2.y, max)
  // console.log(`stopTime:${stopTime} from ${start.y} via ${control1.y} and ${control2.y} to ${end.y} is ${stopY}`);

  const clampRange = clamper(0, scale)

  const moveStart = newStart => {
    setMin(Math.round(newStart.y * factor))
  }
  const moveEnd = newEnd => {
    setMax(Math.round(newEnd.y * factor))
  }
  const moveControl1 = newControl => {
    setControl1({
      x: Math.round(newControl.x),
      y: Math.round(newControl.y * factor)
    })
  }
  const moveControl2 = newControl => {
    setControl2({
      x: Math.round(newControl.x),
      y: Math.round(newControl.y * factor)
    })
  }

  return (
    <div className="chart">
      <div className="flex space center">
        <h2 className="mar-v-none">{title}</h2>
        <div className="options gap-2 small">
          <Checkbox
            label="Curve"
            checked={showCurve}
            toggle={() => setShowCurve(! showCurve)}
            className="small"
          />
          <Checkbox
            label="Stops"
            checked={showStops}
            toggle={() => setShowStops(! showStops)}
          />
          <Checkbox
            label="Snap"
            checked={snap}
            toggle={() => setSnap(! snap)}
          />
        </div>
      </div>
      <svg viewBox="-10 -10 120 120" className="chart">
        <g transform="matrix(1 0 0 -1 0 100)" ref={svgRef}>
          <g className="grid">
            { gridLines.map(
              n => <line key={n} x1={n} y1="0" x2={n} y2="100"/>
            )}
            { gridLines.map(
              n => <line key={n} x1="0" y1={n} x2="100" y2={n}/>
            )}
          </g>
          <rect x="0" y="0" width="100" height="100" className="border"/>
          { stops && showStops &&
            <g>
              { numberRange(0, 100, options.show5s ? 5 : 10).map(
                x => {
                  const hsl = stops[x]
                  const y = hsl[item] / factor
                  return hsl.locked
                    ? <LockedPoint
                        key={x}
                        coordinates={{ x, y }}
                      />
                    : <ControlPoint
                        key={x}
                        coordinates={{ x, y }}
                        setCoordinates={xy => setStop(x, Math.round(xy.y * factor))}
                        minX={x} maxX={x} radius={stopRadius} className={stopClass}
                        svgRef={svgRef}
                      />
                }
              )}
            </g>
          }
          { showCurve &&
            <g>
              <line
                x1="0" y1={min / factor} x2={control1.x} y2={control1.y / factor}
                className="control-line"
              />
              <line
                x1="100" y1={max / factor} x2={control2.x} y2={control2.y / factor}
                className="control-line"
              />
              <polyline className="line" points={
                tPoints.map(
                  x => [
                    bezier(x/100, 0, control1.x, control2.x, 100),
                    bezier(x/100, min / factor, control1.y / factor, control2.y / factor, max / factor)
                  ].join(',')
                ).join(' ')
              }/>
              <ControlPoint
                coordinates={{ x: 0, y: min / factor }}
                setCoordinates={moveStart}
                maxX={0} radius={3} className="start-point"
                svgRef={svgRef}
              />
              <ControlPoint
                coordinates={{ x: 100, y: max / factor }}
                setCoordinates={moveEnd}
                minX={100} radius={3} className="end-point"
                svgRef={svgRef}
              />
              <ControlPoint
                coordinates={{ x: control1.x, y: control1.y / factor }}
                setCoordinates={moveControl1}
                minY={-5} maxY={105}
                svgRef={svgRef}
              />
              <ControlPoint
                coordinates={{ x: control2.x, y: control2.y / factor }}
                setCoordinates={moveControl2}
                minY={-5} maxY={105}
                svgRef={svgRef}
              />
              <ControlPoint
                coordinates={{ x: stopX, y: 0 }}
                setCoordinates={xy => setStopX(snap ? Math.round(xy.x/5) * 5 : Math.round(xy.x))}
                maxY={0} radius={2} className="stop-select-point"
                svgRef={svgRef}
              />
              <line
                x1={stopX} y1={0} x2={stopX} y2={100}
                className="stop-line"
              />
              <line
                x1="0" y1={stopY / factor} x2="100" y2={stopY / factor}
                className="stop-line"
              />
              <text
                x={-2} y={-stopY / factor + 2}
                textAnchor="end" transform="scale(1, -1)"
                className="stop-text"
              >
                {Math.round(stopY)}
              </text>
              <text
                x={stopX} y={8} transform="scale(1, -1)"
                textAnchor="middle"
                className="stop-text"
              >
                {stopX}
              </text>
            </g>
          }
        </g>
      </svg>
      <div className="grid-2 gap-2 stack-mobile small">
        <div className="grid-3 gap-2">
          <div className="field">
            <label>Min</label>
            <input
              type="number"
              value={min}
              onChange={e => setMin(clampRange(e.target.value))}
            />
          </div>
          <div className="field">
            <label>Ctrl X</label>
            <input
              type="number"
              value={control1.x}
              onChange={e => setControl1({ x: clampRange(e.target.value), y: control1.y })}
            />
          </div>
          <div className="field">
            <label>Ctrl Y</label>
            <input
              type="number"
              value={control1.y}
              onChange={e => setControl1({ x: control1.x, y: clampRange(e.target.value) })}
            />
          </div>
        </div>
        <div className="grid-3 gap-2">
          <div className="field">
            <label>Max</label>
            <input
              type="number"
              value={max}
              onChange={e => setMax(clampRange(e.target.value))}
            />
          </div>
          <div className="field">
            <label>X</label>
            <input
              type="number"
              value={control2.x}
              onChange={e => setControl2({ x: clampRange(e.target.value), y: control2.y })}
            />
          </div>
          <div className="field">
            <label>Y</label>
            <input
              type="number"
              value={control2.y}
              onChange={e => setControl2({ x: control2.x, y: clampRange(e.target.value) })}
            />
          </div>
        </div>
      </div>
      <div className="flex space small start">
        <div>
          <Button
            text="Curve"
            color="orange"
            iconLeft="undo"
            className="mar-r-2 mar-b-2"
            onClick={resetCurve}
            solid
          />
          <Button
            text="Stops"
            color="orange"
            iconLeft="undo"
            className="mar-b-2"
            onClick={resetStops}
            solid
          />
        </div>
        <Button
          text={<>Curve <Icon name="arrow-right" className="mar-h"/> Stops</>}
          color="blue"
          // iconRight="arrow-up"
          className="mar-b-2"
          onClick={curveToStops}
          solid
        />
      </div>
    </div>
  )
}

export default CurveEditor