import React from 'react'
import Menu from './Menu.jsx'
import Options from '../palettes/Options.jsx'
import MyPalettes from './Sidebar/MyPalettes.jsx'
import { Standards } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <MyPalettes/>
    {/* <Menu items={GettingStarted}/> */}
    <Menu title="Standard Palettes" items={Standards}/>

    <div className="menu">
      <h3>Options</h3>
      <Options/>
    </div>
    {/* <Menu title="Developer Tests" items={Dev}/> */}
  </div>

export default Sidebar
