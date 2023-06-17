import React from 'react'
import { Provider } from './Context.jsx'
import Editor from './Editor.jsx'

const Index = () =>
  <Provider>
    <Editor/>
  </Provider>

export default Index
