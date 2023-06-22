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

const Sidebar = ({
  palette,
  palettes,
  createPalette,
}) => {
  const navigate = useNavigate()
  const newPalette = () => {
    const p = createPalette()
    navigate(URLS.palette.home(p.uri))
  }

  return (
    <div>
      <div className="menu">
        <div className="flex space end mar-b-2">
          <h4 className="mar-v-none">Palettes</h4>
          <Button
            color="green"
            className="small mar-r-2"
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
            />
        )}
      </div>

      {/* <Menu items={GettingStarted}/> */}
      <Menu title="Standard Palettes" items={Standards}/>

      <div className="menu">
        <h4>Options</h4>
        <Options/>
      </div>
      <Menu title="Developer Tests" items={Dev}/>
    </div>
  )
}

const PaletteLink = ({ p, uri, palette })  => {
  const selected = uri === palette?.uri
  return (
    <div className={`${selected ? 'active' : ''}`}>
      <Link
        to={URLS.palette.home(uri)}
        className="item"
        text={p.name}
        // className={`${name === palette?.name ? 'active' : ''} item`}
        // onClick={() => selectPalette(name)}
      />
      { selected &&
        <div className="ranges menu">
          { Object.entries(palette.ranges).map(
            ([ruri, range]) =>
              <Link
                key={ruri}
                to={URLS.palette.range(uri, ruri)}
                className="item"
                style={{
                  // '--background': 'red',
                  '--active-background': hslToCSS(range.stops[70]),
                  '--swatch-background': hslToCSS(range.stops[50])
                }}
              >
                <div
                  className="swatch"
                  // style={{ backgroundColor: hslToCSS(range.stops[50]) }}
                />
                {range.name}
              </Link>
          )}
        </div>
      }
    </div>
  )
}

export default Consumer(Sidebar)
