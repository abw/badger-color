import React from 'react'
import Menu from './Menu.jsx'
import { Bezier, GettingStarted, Styles } from './Menus.jsx'

const Sidebar = () =>
  <div>
    {/* <Menu items={GettingStarted}/> */}
    <Menu title="Color Designer" items={Bezier}/>
    {/* <Menu title="Styles" items={Styles}/> */}
  </div>

export default Sidebar
