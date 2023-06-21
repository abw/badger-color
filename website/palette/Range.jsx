import React from 'react'
import Swatches from './Swatches.jsx'
import { usePalettes } from '../palettes/Context.jsx'

const Range = ({ range }) => {
  const { options } = usePalettes()
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
