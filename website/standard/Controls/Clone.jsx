import React from 'react'
import Button from '../../ui/Button.jsx'
import Theme from '../../site/Theme.jsx'
import { usePalettes } from '../../palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../site/URLS.jsx'
import { Consumer } from '../Context.jsx'

const Clone = ({ palette }) => {
  const { clonePalette } = usePalettes()
  const navigate = useNavigate()
  const onClonePalette = () => {
    const p = clonePalette(palette)
    navigate(URLS.palette.home(p.uri))
  }

  return (
    <Button
      icon="clone"
      color={Theme.colors.clone}
      onClick={onClonePalette}
      solid
    />
  )
}

export default Consumer(Clone)