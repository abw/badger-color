import React from 'react'
import Link from './Link.jsx'

const Menu = ({title, items}) =>
  <div className="menu">
    <h3>{title}</h3>
    { items.map(
      item => <Link key={item.to} className="item" {...item}/>
    )}
  </div>

export default Menu
