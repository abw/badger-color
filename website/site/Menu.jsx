import React from 'react'
import Link from './Link.jsx'

const Menu = ({title, items}) =>
  <div className="menu">
    <h4>{title}</h4>
    { items.map(
      item => <Link key={item.to} className="item" {...item}/>
    )}
  </div>

export default Menu
