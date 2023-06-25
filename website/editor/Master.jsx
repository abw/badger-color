import React from 'react'
import { Consumer } from './Context.jsx'
import DraggablePoint from './DraggablePoint.jsx'

const Master = ({
  x=110,
  mid,
  moveMid,
  masterRadius=2,
  yFactor,
  svgRef
}) => {
  return (
    <g className="master">
      <line
        x1={x}
        y1={0}
        x2={x}
        y2={100}
        className="slider"
      />
      <line
        x1={50}
        y1={mid / yFactor}
        x2={x}
        y2={mid / yFactor}
        className="dashed"
      />
      <DraggablePoint
        x={x}
        y={mid / yFactor}
        maxY={100}
        minX={x}
        maxX={x}
        setXY={moveMid}
        radius={masterRadius}
        svgRef={svgRef}
      />
      <text
        x={116}
        y={-mid / yFactor + 1.5}
        textAnchor="middle"
        transform="scale(1, -1)"
      >
        {Math.round(mid)}
      </text>
    </g>
  )
}

export default Consumer(Master)