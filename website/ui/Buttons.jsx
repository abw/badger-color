import React from 'react'
import Button from './Button.jsx'

const Buttons = ({
  buttons,
  className=''
}) =>
  <div className={`buttons ${className}`}>
    {buttons.map(
      (button, n) =>
        <Button
          key={n}
          {...button}
        />
    )}
  </div>

export default Buttons
