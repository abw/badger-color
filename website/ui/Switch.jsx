import React, { useState } from 'react'
import { Buttons } from '@abw/badger-react-ui'

const stateProps = (a, b) =>
  a === b
    ? { color: 'grey40', className: 'solid' }
    : { color: 'grey', className: 'outline' }

export const Switch = ({ options, initial=options[0].value }) => {
  const [value, setValue] = useState(initial)
  const buttons = options.map(
    item => ({
      className: 'mar-b-none',
      onClick: () => setValue(item.value),
      ...stateProps(value, item.value),
      ...item
    })
  )
  const Toggle = ({ className='' }) =>
    <Buttons
      buttons={buttons}
      className={className}
    />

  return { value, setValue, buttons, Toggle }
}

export default Switch