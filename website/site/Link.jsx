import React from 'react'
import { Button } from '@abw/badger-react-ui'
import { NavLink } from 'react-router-dom'

const Link = ({
  to,
  className='',
  exact,
  children,
  text,
  onClick,
  label,
  button,
  style,
  ...props
}) =>
  <NavLink
    to={to}
    onClick={onClick}
    end={exact && 'end'}
    className={({ isActive }) => `${className} ${isActive ? 'active' : ''}`}
    aria-label={label}
    style={style}
    // ref={ref}
  >
    { button
      ? <Button text={text} {...props}/>
      : (children||text)
    }
  </NavLink>

export default Link
