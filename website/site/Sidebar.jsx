import React from 'react'
import Menu from './Menu.jsx'
import { Bezier, GettingStarted, Palettes, Styles } from './Menus.jsx'

const Sidebar = () =>
  <div>
    {/* <Menu items={GettingStarted}/> */}
    <Menu title="Palette Designer" items={Bezier}/>
    <Menu title="Palettes" items={Palettes}/>
    {/* <Menu title="Styles" items={Styles}/> */}
  </div>

export default Sidebar
