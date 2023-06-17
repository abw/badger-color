import React from 'react'
import Range from './Range.jsx'
import { usePalette } from './Context.jsx'

const Ranges = () => {
  const { palette } = usePalette()

  return (
    <div className="ranges">
      { Object.values(palette.ranges).map(
        range => <Range key={range.name} range={range}/>
      )}
    </div>
  )
}

export default Ranges