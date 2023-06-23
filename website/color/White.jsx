import React from 'react'
import Info from './Info.jsx'

export const White = () =>
  <div
    className="light swatch white"
    style={{ backgroundColor: '#fff' }}
  >
    <Info
      stop="W"
      showStop={true}
      color={{
        hex: '#FFFFFF',
        h: 0,
        s: 0,
        l: 100
      }}
    />
  </div>

export default White