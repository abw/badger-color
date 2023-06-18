import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'
import Name from '../palette/Name.jsx'
import Button from '../ui/Button.jsx'
import { useNavigate } from 'react-router-dom'

const Edit = ({ palette, selectPalette, deletePalette }) => {
  const navigate = useNavigate()
  const { uri } = useParams()

  useEffect(
    () => {
      selectPalette(uri)
    },
    [uri]
  )
  const trash = () => {
    deletePalette()
    navigate('/')
  }

  if (uri !== palette?.uri) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div>
      <div className="flex space start">
        <Name/>
        <Button
          text="Delete Palette"
          color="red"
          solid
          iconRight="trash"
          onClick={trash}
        />
      </div>
    </div>
  )
}

export default Consumer(Edit)