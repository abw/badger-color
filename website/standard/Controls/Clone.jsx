import React from 'react'
import Theme from '@/site/Theme.jsx'
import { URLS } from '@/site/URLS.jsx'
import { Button } from '@abw/badger-react-ui'
import { Consumer } from '../Context.jsx'
import { usePalettes } from '@/palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'

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
      className="icon"
    />
  )
}

export default Consumer(Clone)