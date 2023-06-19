import React from 'react'
import testClasses from '../../lib/utils/classes.js'
import Icon from './Icon.jsx'

const Button = ({
  text,
  icon, iconLeft, iconRight,
  color,
  className,
  onClick,
  solid
}) => {
  const classes = testClasses(
    {
      'has-icon-left':  iconLeft,
      'has-icon-right': iconRight,
      solid
    },
    'button', color, className
  )
  return (
    <button
      className={classes}
      onClick={onClick}
    >
      { iconLeft &&
        <Icon name={iconLeft} className="icon-left"/>
      }
      { icon &&
        <Icon name={icon} className="icon-only"/>
      }
      {text}
      { iconRight &&
        <Icon name={iconRight} className="icon-right"/>
      }
    </button>
  )
}

export default Button