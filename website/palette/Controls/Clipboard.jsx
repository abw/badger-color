import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import { sleep } from '@abw/badger-utils'
import { Consumer } from '../../palettes/Context.jsx'

const Clipboard = ({ palette }) => {
  const [copied, setCopied] = useState(false)
  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }

  return copied
    ? <Button
        icon="check"
        color="violet"
        solid
        className="mar-l-2"
      />
    : <Button
        icon="clipboard"
        color="violet"
        solid
        className="mar-l-2"
        onClick={() => copy(JSON.stringify(palette, null, 2))}
      />
}

export default Consumer(Clipboard)