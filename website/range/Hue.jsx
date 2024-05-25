import React from 'react'
import Editor from '@/editor/index.jsx'
import { Consumer } from '@/palettes/Context.jsx'

const Hue = ({
  title='Hue',
}) =>
  <Editor
    curveName='h'
    title={title}
    scale={359}
  />

export default Consumer(Hue)
