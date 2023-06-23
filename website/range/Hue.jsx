import React from 'react'
import { Consumer } from '../palettes/Context.jsx'
import Editor from '../editor/index.jsx'

const Hue = ({
  title='Hue',
}) =>
  <Editor
    curveName='h'
    title={title}
    scale={359}
  />

export default Consumer(Hue)
