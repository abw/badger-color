import React from 'react'
import Info from './Info.jsx'

// How much more black could this be?  The answer is none, none more black.

export const Black = () =>
  <div
    className="dark swatch black"
    style={{ backgroundColor: '#000' }}
  >
    <Info
      stop="B"
      showStop={true}
      color={{
        hex: '#000000',
        h: 0,
        s: 0,
        l: 0
      }}
    />
  </div>

export default Black