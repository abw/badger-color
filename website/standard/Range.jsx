import React from 'react'
import Swatches from './Swatches.jsx'
import { Consumer } from './Context.jsx'

const Range = ({
  uri,
  range,
  options
}) =>
  <div className="range">
    { options.names &&
      <h2>{range.name}</h2>
    }
    <Swatches uri={uri} range={range}/>
  </div>

export default Consumer(Range)
