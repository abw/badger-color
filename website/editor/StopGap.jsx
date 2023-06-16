import React from 'react'

const StopGap = ({stopGap, setStopGap}) =>
  <div className="options mar-t-2">
    Stop Gap{/* ({stopGap} = { typeof stopGap})*/}:
    <label>
      <input
        type="radio"
        name="stop-gap"
        value="5"
        onChange={e => setStopGap(e.target.value)}
        checked={stopGap == 5}
      /> 5
    </label>
    <label>
      <input
        type="radio"
        name="stop-gap"
        value="10"
        onChange={e => setStopGap(e.target.value)}
        checked={stopGap == 10}
      /> 10
    </label>
  </div>

export default StopGap