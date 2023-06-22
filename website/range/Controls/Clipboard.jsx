import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import { sleep } from '@abw/badger-utils'
import { Consumer } from '../../palettes/Context.jsx'

const Clipboard = ({ range }) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    console.log(`copying range to clipboard: `, range)

    navigator.clipboard.writeText(
      JSON.stringify(range, null, 2)
    )
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
        onClick={copy}
      />
}

export default Consumer(Clipboard)