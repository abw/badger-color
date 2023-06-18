import React from 'react'
import Menu from './Menu.jsx'
import { Palettes } from './Menus.jsx'
import { Consumer } from '../palettes/Context.jsx'
import Button from '../ui/Button.jsx'
import Link from './Link.jsx'

const Sidebar = ({
  palettes,
  createPalette,
}) =>
  <div>
    <div className="menu">
      <div className="flex space end mar-b-2">
        <h4 className="mar-v-none">Palettes</h4>
        <Button
          color="green"
          className="small mar-r-2"
          icon="plus"
          solid
          onClick={() => createPalette()}
        />
      </div>
      { Object.entries(palettes).map(
        ([uri, palette]) =>
          <Link
            key={uri}
            to={`/edit/${uri}`}
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

export default Consumer(Sidebar)
