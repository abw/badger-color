import React from 'react'
import { useRange } from '../range/Context.jsx'
import Button from '../ui/Button.jsx'

const Controls = () => {
  const { reset, curvesToStops, save } = useRange()
  return (
    <div className="flex space start mar-t-4">
      <Button
        text="Reset All"
        color="orange"
        iconLeft="undo"
        className="mar-b-2"
        onClick={reset}
      />
      <div className="text-right">
        <Button
          text="All Curves to Stops"
          color="blue"
          className="mar-l-2 mar-b-2"
          iconRight="arrow-up"
          onClick={curvesToStops}
          solid
        />
        <Button
          text="Save Stops to Palette"
          color="green"
          iconRight="check"
          className="mar-l-2 mar-b-2"
          onClick={save}
          solid
        />
      </div>
    </div>
  )
}

export default Controls