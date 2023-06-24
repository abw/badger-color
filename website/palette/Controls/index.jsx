import React from 'react'
import Delete from './Delete.jsx'
import Clipboard from './Clipboard.jsx'
import Clone from './Clone.jsx'
import Edit from './Edit.jsx'
import Help from './Help.jsx'
import Examples from './Examples.jsx'
import Download from './Download.jsx'

const Controls = () =>
  <div className="controls text-right mar-l-2 mar-t-2 flex gap-2">
    <Delete/>
    <Examples/>
    <Clipboard/>
    <Download/>
    <Edit/>
    <Clone/>
    <Help/>
  </div>

export default Controls