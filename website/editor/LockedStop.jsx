import React from 'react'
import { Consumer } from './Context.jsx'

const LockedStop = ({
  x, y,
  lockedRadius,
  className='locked'
}) =>
  <circle
    cx={x} cy={y}
    r={lockedRadius}
    className={className}
  />

export default Consumer(LockedStop)
