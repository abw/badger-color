import React from 'react'
import { Consumer } from './Context.jsx'
import { range as numberRange } from '@abw/badger-utils'
import DraggablePoint from './DraggablePoint.jsx'
import { bezier } from '../../lib/utils/bezier.js'

const polyPoints = numberRange(0, 100)

const Curve = ({
  curve,
  showCurve,
  min, max,
  moveMin, moveMax,
  minControl, maxControl,
  moveMinControl, moveMaxControl,
  endRadius, controlRadius,
  yFactor,
  svgRef
}) =>
  curve && showCurve &&
    <g className="curve">
      <line
        x1="0"
        y1={min / yFactor}
        x2={minControl.x}
        y2={minControl.y / yFactor}
        className="control-line"
      />
      <line
        x1="100"
        y1={max / yFactor}
        x2={maxControl.x}
        y2={maxControl.y / yFactor}
        className="control-line"
      />
      <DraggablePoint
        x={0}
        y={min / yFactor}
        maxX={0}
        setXY={moveMin}
        radius={endRadius}
        svgRef={svgRef}
        className="min end point"
      />
      <DraggablePoint
        x={minControl.x}
        y={minControl.y / yFactor}
        minY={0} maxY={100}
        setXY={moveMinControl}
        radius={controlRadius}
        svgRef={svgRef}
        className="min control point"
      />
      <DraggablePoint
        x={maxControl.x}
        y={maxControl.y / yFactor}
        minY={0} maxY={100}
        setXY={moveMaxControl}
        radius={controlRadius}
        svgRef={svgRef}
        className="max control point"
      />
      <DraggablePoint
        x={100}
        y={max / yFactor}
        maxX={100}
        setXY={moveMax}
        radius={endRadius}
        svgRef={svgRef}
        className="max end point"
      />
      <polyline
        points={
          polyPoints.map(
            x => [
              bezier(
                x/100,
                0,
                minControl.x,
                maxControl.x,
                100
              ),
              bezier(
                x/100,
                min / yFactor,
                minControl.y / yFactor,
                maxControl.y / yFactor,
                max / yFactor
              )
            ].join(',')
          ).join(' ')
        }
      />
    </g>
/*
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
*/

export default Consumer(Curve)
