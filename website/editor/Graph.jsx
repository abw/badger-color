import React from 'react'
import Grid from './Grid.jsx'
import { Consumer } from './Context.jsx'
import Stops from './Stops.jsx'
import Curve from './Curve.jsx'
import StopLines from './StopLines.jsx'
import Master from './Master.jsx'

const Graph = ({
  svgRef
}) =>
  <svg viewBox="-10 -10 130 120" className="graph">
    <g transform="matrix(1 0 0 -1 0 100)" ref={svgRef}>
      <Grid/>
      <Stops/>
      <Curve/>
      <StopLines/>
      <Master/>
    </g>
  </svg>

export default Consumer(Graph)