import React from 'react'
import Delete from './Delete.jsx'
import Clipboard from './Clipboard.jsx'
import Clone from './Clone.jsx'
import Edit from './Edit.jsx'
import Help from './Help.jsx'

const Controls = () =>
  <div className="text-right">
    <Delete/>
    <Clipboard/>
    <Edit/>
    <Clone/>
    <Help/>
  </div>

export default Controls