import React from 'react'

const Info = ({color, stop}) =>
  <div className="info">
    <div className="stop">{stop}</div>
    <div className="specs">
      {color.hex}<br/>
      h:{color.h}&deg;<br/>
      s:{color.s}%<br/>
      l:{color.l}%
    </div>
  </div>

export default Info