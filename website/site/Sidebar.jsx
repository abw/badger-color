import React from 'react'
import Menu from './Menu.jsx'
import { Dev, Standards } from './Menus.jsx'
import { Consumer } from '../palettes/Context.jsx'
import Button from '../ui/Button.jsx'
import Link from './Link.jsx'
import { URLS } from './URLS.jsx'
import { useNavigate } from 'react-router-dom'
import { hslToCSS } from '../../lib/utils/color.js'
import Options from '../palettes/Options.jsx'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Theme from './Theme.jsx'

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
    <div>
      <div className="menu">
        <div className="flex space end mar-b-2">
          <h3 className="mar-v-none">Palettes</h3>
          <Button
            color="green"
            className="small"
            icon="plus"
            solid
            onClick={newPalette}
          />
        </div>
        { Object.entries(palettes).map(
          ([uri, p]) =>
            <PaletteLink
              key={uri}
              uri={uri}
              p={p}
              palette={palette}
              newRange={newRange}
            />
        )}
      </div>

      {/* <Menu items={GettingStarted}/> */}
      <Menu title="Standard Palettes" items={Standards}/>

      <div className="menu">
        <h3>Options</h3>
        <Options/>
      </div>
      <Menu title="Developer Tests" items={Dev}/>
    </div>
  )
}

const PaletteLink = ({ p, uri, palette, newRange })  => {
  return (
    <div>
      <Link
        to={URLS.palette.home(uri)}
        className="item"
        text={p.name}
      />
      { palette &&
      <Routes>
        <Route
          path={`${URLS.palette.home(uri)}/*`}
          element={<PaletteMenu palette={palette} newRange={newRange}/>}
        >
        </Route>
      </Routes>
      }
    </div>
  )
}

const PaletteMenu = ({palette, newRange}) =>
  <div className="ranges menu">
    <div className="flex space end pad-v">
      <h4 className="mar-v-none">Ranges</h4>
      <Button
        color={Theme.colors.add}
        icon="plus"
        className="smaller"
        onClick={newRange}
        solid
      />
    </div>
    { Object.entries(palette.ranges).map(
      ([uri, range]) =>
        <Link
          key={uri}
          to={URLS.palette.range(palette.uri, uri)}
          className="item"
          style={{
            '--active-light-background': hslToCSS(range.stops[70]),
            '--active-dark-background': hslToCSS(range.stops[30]),
            '--swatch-background': hslToCSS(range.stops[50])
          }}
        >
          <div className="swatch"/>
          {range.name}
        </Link>
    )}
  </div>

export default Consumer(Sidebar)
