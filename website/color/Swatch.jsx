import React from 'react'
import Info from './Info.jsx'
import { usePalette } from '../palette/Context.jsx'
import { hslToGrey } from '../../lib/utils/color.js'


const Swatch = ({color, stop}) => {
  const { options } = usePalette()
  const bgcol = options.grey
    ? hslToGrey(color)
    : `hsl(${color.h} ${color.s}% ${color.l}%)`
  return (
    <div
      className="swatch"
      style={{
        backgroundColor: bgcol,
        // backgroundColor: `${color.hex}`,
        color: stop > 50 ? 'black' : 'white'
      }}
    >
      { options.info &&
        <Info color={color} stop={stop}/>
      }
    </div>
  )
}

export default Swatch