import React from 'react'
import Swatches from './Swatches.jsx'
import { usePalette } from './Context.jsx'

const Range = ({ range }) => {
  const { options } = usePalette()
  return (
    <div className="range">
      { options.names &&
        <h2>{range.name}</h2>
      }
      <Swatches range={range}/>
    </div>
  )
}

export default Range
