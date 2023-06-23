import React from 'react'
import { Consumer } from './Context.jsx'

const CurveInputs = ({
  min, changeMin,
  max, changeMax,
  minControl, changeMinControlX, changeMinControlY,
  maxControl, changeMaxControlX, changeMaxControlY,
}) =>
  <div className="curve-inputs grid-2 gap-2 stack-mobile small">
    <div className="grid-3 gap-2">
      <div className="field">
        <label>Min</label>
        <input
          type="number"
          value={min}
          onChange={e => changeMin(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Ctrl X</label>
        <input
          type="number"
          value={minControl.x}
          onChange={e => changeMinControlX(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Ctrl Y</label>
        <input
          type="number"
          value={minControl.y}
          onChange={e => changeMinControlY(e.target.value)}
        />
      </div>
    </div>
    <div className="grid-3 gap-2">
      <div className="field">
        <label>Ctrl X</label>
        <input
          type="number"
          value={maxControl.x}
          onChange={e => changeMaxControlX(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Ctrl Y</label>
        <input
          type="number"
          value={maxControl.y}
          onChange={e => changeMaxControlY(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Max</label>
        <input
          type="number"
          value={max}
          onChange={e => changeMax(e.target.value)}
        />
      </div>
    </div>
  </div>

export default Consumer(CurveInputs)
