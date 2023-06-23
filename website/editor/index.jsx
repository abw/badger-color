import React from 'react'
import CurveInputs from './CurveInputs.jsx'
import Header from './Header.jsx'
import Graph from './Graph.jsx'
import { Provider } from './Context.jsx'
import Controls from './Controls.jsx'

const Editor = props =>
  <Provider {...props}>
    <div className="editor">
      <Header/>
      <Graph/>
      <CurveInputs/>
      <Controls/>
    </div>
  </Provider>

export default Editor
