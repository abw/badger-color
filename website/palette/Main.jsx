import React from 'react'
import Ranges from './Ranges.jsx'
import Editor from '../range/index.jsx'
import { Consumer } from './Context.jsx'

const Main = ({ editingRange }) =>
  <main>
    <Ranges/>
    { editingRange &&
      <Editor key={editingRange}/>
    }
  </main>

export default Consumer(Main)