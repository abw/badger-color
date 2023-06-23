import React from 'react'
import { range as numberRange } from '@abw/badger-utils'

const gridLines = numberRange(10, 90, 10)

const Grid = () =>
  <g className="grid">
    { gridLines.map(
      n => <line key={n} x1={n} y1="0" x2={n} y2="100"/>
    )}
    { gridLines.map(
      n => <line key={n} x1="0" y1={n} x2="100" y2={n}/>
    )}
    <rect x="0" y="0" width="100" height="100"/>
  </g>

export default Grid