import React from 'react'
import Theme from '@/site/Theme.jsx'
import { Button } from '@abw/badger-react-ui'
import { Consumer } from '@/palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { URLS } from '@/site/URLS.jsx'

const Clone = ({ palette, clonePalette }) => {
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
      className="icon"
      data-tooltip="bottom right"
      aria-label="Clone this palette"
    />
  )
}

export default Consumer(Clone)