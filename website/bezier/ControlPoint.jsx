import React, { useState } from 'react'
import { clamper } from '../../lib/utils/index.js'
import { useRef } from 'react'

const ControlPoint = ({
  svgRef,
  coordinates,
  setCoordinates,
  minX=0,
  minY=0,
  maxX=100,
  maxY=100,
  radius=3,
  className='control-point'
}) => {
  const [origin, setOrigin] = useState({ x: 0, y: 0 })
  const drag = useRef(false)
  const [enter, setEnter] = useState(false)
  const clampX = clamper(minX, maxX)
  const clampY = clamper(minY, maxY)
  const cursorPoint = e => {
    const CTM = svgRef.current.getScreenCTM()
    const point = {
      x: (e.clientX - CTM.e) / CTM.a,
      y: (e.clientY - CTM.f) / CTM.d
    }
    return point
  }

  const mouseMove = e => {
    if (drag.current) {
      const pos = cursorPoint(e)
      const newCoords = {
        x: clampX(pos.x - origin.x),
        y: clampY(pos.y - origin.y)
      }
      setCoordinates(newCoords)
    }
  }

  const mouseDown = e => {
    let pos = cursorPoint(e)
    const element = e.target
    pos.x -= parseFloat(element.getAttributeNS(null, 'cx'))
    pos.y -= parseFloat(element.getAttributeNS(null, 'cy'))
    drag.current = true
    setOrigin(pos)
    window.addEventListener(
      'mousemove',
      mouseMove
    )
    window.addEventListener(
      'mouseup',
      () => {
        drag.current = false
        // setEnter(false)
        window.removeEventListener('mousemove', mouseMove)
      }
    )
  }

  return (
    <circle
      cx={coordinates.x} cy={coordinates.y}
      r={radius} className={`${className} ${enter ? 'hover' : ''} ${drag.current ? 'drag' : ''}`}
      onMouseDown={mouseDown}
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    />
  )
}

export default ControlPoint