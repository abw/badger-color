import React from 'react'
import Controls from './Controls/index.jsx'
import { Consumer } from '@/palettes/Context.jsx'

const Header = ({
  range,
}) =>
  <header>
    <div className="flex space end stack-tablet">
      <h2>{range.name}</h2>
      <Controls/>
    </div>
  </header>

export default Consumer(Header)