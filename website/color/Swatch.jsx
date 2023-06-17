import React from 'react'
import Info from './Info.jsx'

const Swatch = ({color, stop, showInfo}) =>
  <div
    className="swatch"
    style={{
      backgroundColor: `hsl(${color.h} ${color.s}% ${color.l}%)`,
      // backgroundColor: `${color.hex}`,
      color: stop > 50 ? 'black' : 'white'
    }}
  >
    { showInfo && <Info color={color} stop={stop}/> }
  </div>

export default Swatch