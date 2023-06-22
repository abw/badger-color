import React from 'react'
import Range from './Range.jsx'
import { Consumer } from '../palettes/Context.jsx'

const Ranges = ({ palette }) => {
  return (
    <div className="ranges">
      { Object.entries(palette.ranges).map(
        ([uri, range]) =>
          <Range key={uri} uri={uri} range={range}/>
      )}
    </div>
  )
}

export default Consumer(Ranges)