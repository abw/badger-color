import React from 'react'

const LockedPoint = ({
  coordinates,
  radius=1.5,
  className='locked-point'
}) => {
  return (
    <circle
      cx={coordinates.x} cy={coordinates.y}
      r={radius} className={className}
    />
  )
}

export default LockedPoint