import React from 'react'
import { useRange } from '../range/Context.jsx'

const Controls = () => {
  const { reset, curvesToStops, save } = useRange()
  return (
    <div className="flex space mar-t-4">
      <button
        className="orange button"
        onClick={reset}
      >
        Reset Range
      </button>
      <div>
        <button
          className="solid blue button"
          onClick={curvesToStops}
        >
          All Curves to Stops
        </button>
        <button
          className="solid green button mar-l-2"
          onClick={save}
        >
          Save Range
        </button>
      </div>
    </div>
  )
}

export default Controls