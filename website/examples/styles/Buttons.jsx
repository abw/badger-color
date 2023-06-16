import React from 'react'
import { colors } from '../../config/colors.js'

const Buttons = () =>
  <div className="surface-0 pad-2 mar-b-4">
    <div className="mar-b-2 grid-fit gap-2">
      <button>Default</button>
      { colors.map(
        col =>
          <button key={col} className={col}>
            <span>{col}</span>
          </button>
      )}
    </div>
    <div className="grid-fit gap-1">
      <button className="solid">Default</button>
      { colors.map(
        col => <button key={col} className={`solid ${col}`}>{col}</button>
      )}
    </div>
  </div>

export default Buttons
