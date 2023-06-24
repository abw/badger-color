import React from 'react'
import Button from '../../ui/Button.jsx'
import Theme from '../../site/Theme.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../../site/URLS.jsx'

const Clone = ({ palette, range, cloneRange }) => {
  const navigate = useNavigate()
  const onCloneRange = () => {
    console.log(`onCloneRange`)
    const r = cloneRange(range)
    navigate(URLS.palette.range(palette.uri, r.uri))
  }

  return (
    <Button
      icon="clone"
      color={Theme.colors.clone}
      onClick={onCloneRange}
      solid
    />
  )
}

export default Consumer(Clone)