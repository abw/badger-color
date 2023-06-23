import React from 'react'
import { Consumer } from './Context.jsx'
import LockedStop from './LockedStop.jsx'
import DraggablePoint from './DraggablePoint.jsx'

const Stop = ({
  stop,
  color,
  setStop,
  stopRadius,
  curveName,
  yFactor,
  svgRef
}) => {
  const x = stop
  const y = color[curveName] / yFactor
  return color.locked
    ? <LockedStop
        x={x} y={y} className="locked"
      />
    : <DraggablePoint
        x={x} y={y}
        setXY={xy => setStop(x, Math.round(xy.y * yFactor))}
        minX={x} maxX={x}
        radius={stopRadius}
        className="stop"
        svgRef={svgRef}
      />
}

export default Consumer(Stop)
