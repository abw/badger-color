import React from 'react'
import { useRange } from '../range/Context.jsx'

const Controls = () => {
  const { save } = useRange()
  return (
    <div className="text-right mar-t-2">
      <button
        className="solid green button"
        onClick={save}
      >
        Save Range
      </button>
    </div>
  )
}

export default Controls