import React from 'react'
import Editor from '@/editor/index.jsx'
import { Consumer } from '@/palettes/Context.jsx'

const Saturation = ({
  title='Saturation',
}) =>
  <Editor
    curveName='s'
    title={title}
  />

export default Consumer(Saturation)
