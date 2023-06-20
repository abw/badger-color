import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button.jsx'

const Link = ({
  to,
  className='',
  exact,
  children,
  text,
  onClick,
  label,
  button,
  ...props
}) =>
  <NavLink
    to={to}
    onClick={onClick}
    end={exact && 'end'}
    className={({ isActive }) => `${className} ${isActive ? 'active' : ''}`}
    aria-label={label}
    // ref={ref}
  >
    { button
      ? <Button text={text} {...props}/>
      : (children||text)
    }
  </NavLink>

export default Link
