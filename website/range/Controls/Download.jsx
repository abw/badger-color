import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Theme from '../../site/Theme.jsx'
import { sleep } from '@abw/badger-utils'
import { Consumer } from '../../palettes/Context.jsx'
import { download } from '../../../lib/utils/download.js'
import { now } from '@abw/badger-timestamp'

const Download = ({ palette, range }) => {
  const [downloaded, setDownloaded] = useState(false)
  const copy = () => {
    download(range, `${palette.uri}-${range.uri}-${now().kebab()}.json`)
    setDownloaded(true)
    sleep(2000).then(() => setDownloaded(false))
  }

  return downloaded
    ? <Button
        icon="check"
        color={Theme.colors.download}
        solid
      />
    : <Button
        icon="download"
        color={Theme.colors.download}
        solid
        onClick={copy}
      />
}

export default Consumer(Download)