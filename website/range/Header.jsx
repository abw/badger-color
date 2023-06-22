import React from 'react'
import { Consumer } from '../palettes/Context.jsx'
import Controls from './Controls/index.jsx'

const Header = ({
  range,
}) =>
  <div className="flex space end">
    <h2>{range.name}</h2>
    <Controls/>
  </div>

export default Consumer(Header)