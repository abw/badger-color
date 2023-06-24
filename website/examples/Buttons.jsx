import React from 'react'
import Example from './Example.jsx'

const Buttons = () =>
  <Example title="Buttons">
    <div className="flex gap-2">
      <button>Outline Button</button>
      <button className="solid">Solid Button</button>
    </div>
  </Example>

export default Buttons