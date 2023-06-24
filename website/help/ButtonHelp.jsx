import React from 'react'
import Button from '../ui/Button.jsx'

const ButtonHelp = ({
  color,
  icon,
  text,
  subtext,
  children
}) =>
  <div className="flex start gap-4 mar-b-2" style={{ minHeight: '3rem' }}>
    <Button
      color={color}
      icon={icon}
      // size="small"
      solid
    />
    <div>
      {text||children}
      { subtext && <div className="small">{subtext}</div>  }
    </div>
  </div>

export default ButtonHelp

