import React from 'react'
import Button from '../../ui/Button.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../site/URLS.jsx'

const Clone = ({ palette, clonePalette }) => {
  const navigate = useNavigate()
  const onClonePalette = () => {
    const p = clonePalette(palette)
    navigate(URLS.palette.home(p.uri))
  }

  return (
    <Button
      icon="clone"
      color="green"
      className="mar-l-2"
      onClick={onClonePalette}
      solid
    />
  )
}

export default Consumer(Clone)