import React from 'react'
import Edit from './Edit.jsx'
import Help from './Help.jsx'
import Clone from './Clone.jsx'
import Delete from './Delete.jsx'
import Examples from './Examples.jsx'
import Download from './Download.jsx'
import Clipboard from './Clipboard.jsx'

const Controls = () =>
  <div className="controls text-right mar-l-2 flex gap-2">
    <Delete/>
    <Edit/>
    <Clone/>
    <Examples/>
    <Clipboard/>
    <Download/>
    <Help/>
  </div>

export default Controls