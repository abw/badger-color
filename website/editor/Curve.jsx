import React from 'react'
import DraggablePoint from './DraggablePoint.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { bezier } from '@/lib/utils/bezier.js'
import { Consumer } from './Context.jsx'

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
    </g>

export default Consumer(Curve)
