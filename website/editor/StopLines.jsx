import React from 'react'
import { Consumer } from './Context.jsx'
import DraggablePoint from './DraggablePoint.jsx'


const StopLines = ({
  stopX,
  stopY,
  setStopX,
  snap,
  stopSelectRadius,
  yFactor,
  svgRef
}) =>
  <g className="stop-lines">
    <DraggablePoint
      x={stopX}
      y={0}
      maxY={0}
      setXY={xy => setStopX(snap ? Math.round(xy.x/5) * 5 : Math.round(xy.x))}
      radius={stopSelectRadius}
      svgRef={svgRef}
    />
    <line
      x1={stopX}
      y1={0}
      x2={stopX}
      y2={100}
    />
    <line
      x1="0"
      y1={stopY / yFactor}
      x2="100"
      y2={stopY / yFactor}
    />
    <text
      x={-5}
      y={-stopY / yFactor + 2}
      textAnchor="middle"
      transform="scale(1, -1)"
    >
      {Math.round(stopY)}
    </text>
    <text
      x={stopX}
      y={8}
      transform="scale(1, -1)"
      textAnchor="middle"
    >
      {stopX}
    </text>
  </g>

/*
*/

export default Consumer(StopLines)