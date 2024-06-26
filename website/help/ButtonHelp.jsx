import React from 'react'
import { Button } from '@abw/badger-react-ui'

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
      className="icon no-focus"
      // size="small"
    />
    <div>
      {text||children}
      { subtext && <div className="small">{subtext}</div>  }
    </div>
  </div>

export default ButtonHelp

