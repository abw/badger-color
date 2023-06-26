import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Theme from '../../site/Theme.jsx'
import { sleep } from '@abw/badger-utils'
import { Consumer } from '../Context.jsx'

const Clipboard = ({ palette }) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(
      JSON.stringify(palette, null, 2)
    )
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }

  return copied
    ? <Button
        icon="check"
        color={Theme.colors.clipboard}
        solid
      />
    : <Button
        icon="clipboard"
        color={Theme.colors.clipboard}
        solid
        onClick={copy}
      />
}

export default Consumer(Clipboard)