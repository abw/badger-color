import React, { useState, useEffect }  from 'react'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { Consumer } from '../palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'

const Name = ({ palette, renamePalette }) => {
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const cancel = () => {
    setEditing(false)
  }
  const save = name => {
    const newPalette = renamePalette(name)
    cancel()
    navigate(`/edit/${newPalette.uri}`)
  }

  return editing
    ? <EditName initialName={palette.name} save={save} cancel={cancel}/>
    : <div className="flex center hover" onClick={() => setEditing(true)}>
        <h1>{palette.name}</h1>
        <Icon name="pen" className="mar-l-2"/>
      </div>
}

const EditName = ({ initialName, cancel, save }) => {
  const [newName, setNewName] = useState(initialName)
  useEffect(
    () => {
      const listener = event => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          event.preventDefault()
          save(newName)
        }
        else if (event.code === 'Escape') {
          event.preventDefault()
          cancel()
        }
      }
      document.addEventListener('keydown', listener)
      return () => document.removeEventListener('keydown', listener)
    },
    [newName]
  )
  return (
    <div className="edit-name flex stretch">
      <input
        type="text" value={newName}
        onChange={e => setNewName(e.target.value)}
      />
      <Button
        icon="cross"
        color="grey"
        className="mar-l-2"
        onClick={cancel}
      />
      <Button
        icon="check"
        color="green"
        solid
        className="mar-l-2"
        onClick={() => save(newName)}
      />
    </div>
  )
}

export default Consumer(Name)