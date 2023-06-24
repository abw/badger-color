import React from 'react'
import Delete from './Delete.jsx'
import Clipboard from './Clipboard.jsx'
import Clone from './Clone.jsx'
import Edit from './Edit.jsx'
import Help from './Help.jsx'
import Examples from './Examples.jsx'
import Download from './Download.jsx'

const Controls = () =>
  <div className="smallish text-right">
    <Delete/>
    <Examples/>
    <Clipboard/>
    <Download/>
    <Edit/>
    <Clone/>
    <Help/>
  </div>

export default Controls