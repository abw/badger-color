import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import { sleep } from '@abw/badger-utils'
import { Button } from '@abw/badger-react-ui'
import { Consumer } from '@/palettes/Context.jsx'

const Clipboard = ({ range }) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(
      JSON.stringify(range, null, 2)
    )
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }

  return copied
    ? <Button
        icon="check"
        color={Theme.colors.clipboard}
        className="icon"
      />
    : <Button
        icon="clipboard"
        color={Theme.colors.clipboard}
        className="icon"
        onClick={copy}
        data-tooltip="top right"
        aria-label="Copy range data to clipboard"
      />
}

export default Consumer(Clipboard)