import React from 'react'
import { Provider } from './Context.jsx'
import Range from './Range.jsx'

const Index = ({name}) =>
  <Provider name={name}>
    <Range/>
  </Provider>

export default Index
