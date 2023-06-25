import React from 'react'
import Button from '../../ui/Button.jsx'
import Palette from './Palette.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import { URLS } from '../URLS.jsx'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({
  palette,
  palettes,
  createPalette,
  createRange,
}) => {
  const navigate = useNavigate()
  const newPalette = () => {
    const p = createPalette()
    navigate(URLS.palette.home(p.uri))
  }
  const newRange = () => {
    const r = createRange()
    navigate(URLS.palette.range(palette.uri, r.uri))
  }

  return (
    <div className="menu">
      <div className="flex space end mar-b-2">
        <h3 className="mar-v-none">My Palettes</h3>
        <Button
          color="green"
          className="smaller"
          icon="plus"
          solid
          onClick={newPalette}
        />
      </div>
      { Object.entries(palettes).map(
        ([uri, p]) =>
          <Palette
            key={uri}
            uri={uri}
            p={p}
            palette={palette}
            newRange={newRange}
          />
      )}
    </div>
  )
}

export default Consumer(Sidebar)
