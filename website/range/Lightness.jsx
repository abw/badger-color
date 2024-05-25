import React from 'react'
import Editor from '@/editor/index.jsx'
import { Consumer } from '@/palettes/Context.jsx'

const Lightness = ({
  title='Lightness',
}) =>
  <Editor
    curveName='l'
    title={title}
  />

export default Consumer(Lightness)
