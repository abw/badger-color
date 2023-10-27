import React from 'react'

export const Specs = ({color, className='specs'}) =>
  <div className={className}>
    {color.hex}<br/>
    h:{color.h}&deg;<br/>
    s:{color.s}%<br/>
    l:{color.l}%
  </div>

export default Specs