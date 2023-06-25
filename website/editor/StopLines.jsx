import React from 'react'
import { Consumer } from './Context.jsx'
import DraggablePoint from './DraggablePoint.jsx'


const StopLines = ({
  stopX,
  stopY,
  setStopX,
  options,
  snap,
  stopSelectRadius,
  yFactor,
  svgRef
}) => {
  const snapSize = options.show5s ? 5 : 10
  const snapper = x =>
    snap
      ? Math.round(x/snapSize) * snapSize
      : Math.round(x)

  return (
    <g className="stop-lines">
      <line
        x1={stopX}
        y1={0}
        x2={stopX}
        y2={stopY / yFactor}
      />
      <line
        x1="0"
        y1={stopY / yFactor}
        x2={stopX}
        y2={stopY / yFactor}
      />
      <DraggablePoint
        x={stopX}
        y={0}
        maxY={0}
        setXY={xy => setStopX(snapper(xy.x))}
        radius={stopSelectRadius}
        svgRef={svgRef}
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
  )
}

export default Consumer(StopLines)