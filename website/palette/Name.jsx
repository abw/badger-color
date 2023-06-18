import React, { useState }  from 'react'
import { Consumer } from '../palettes/Context.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { useNavigate } from "react-router-dom";

const Edit = ({ palette, renamePalette }) => {
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [newName, setNewName] = useState(false)
  const editName = () => {
    setNewName(palette?.name)
    setEditing(true)
  }
  const save = () => {
    setEditing(false)
    const newPalette = renamePalette(newName)
    navigate(`/edit/${newPalette.uri}`)
  }

  return editing
    ? <div className="edit-name flex stretch">
        <input
          type="text" value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <Button
          icon="cross"
          color="grey"
          className="mar-l-2"
          onClick={() => setEditing(false)}
        />
        <Button
          icon="check"
          color="green"
          solid
          className="mar-l-2"
          onClick={save}
        />
      </div>
    : <div className="flex center hover" onClick={editName}>
        <h1>{palette.name}</h1>
        <Icon name="pen" className="mar-l-2"/>
      </div>
}

export default Consumer(Edit)