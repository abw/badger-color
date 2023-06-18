import React from 'react'
import Menu from './Menu.jsx'
import { Palettes } from './Menus.jsx'
import { Consumer } from '../palettes/Context.jsx'
import Button from '../ui/Button.jsx'
import Link from './Link.jsx'
import { URLS } from './URLS.jsx'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({
  palettes,
  createPalette,
}) => {
  const navigate = useNavigate()
  const newPalette = () => {
    const p = createPalette()
    navigate(URLS.edit(p.uri))
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
          ([uri, palette]) =>
            <Link
              key={uri}
              to={URLS.edit(uri)}
              className="item"
              text={palette.name}
              // className={`${name === palette?.name ? 'active' : ''} item`}
              // onClick={() => selectPalette(name)}
            />
        )}
      </div>

      {/* <Menu items={GettingStarted}/> */}
      <Menu title="Standard Palettes" items={Palettes}/>
      {/* <Menu title="Styles" items={Styles}/> */}
    </div>
  )
}

export default Consumer(Sidebar)
