import React from 'react'
import Hue from './Hue.jsx'
import Saturation from './Saturation.jsx'
import Lightness from './Lightness.jsx'
import { Consumer } from '@/palettes/Context.jsx'

const Editor = () =>
  <div className="range-editor">
    <div className="grid-3 gap-6 stack-desktop mar-t-2">
      <Hue/>
      <Saturation/>
      <Lightness/>
    </div>
  </div>

export default Consumer(Editor)