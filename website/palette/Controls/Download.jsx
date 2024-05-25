import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import { now } from '@abw/badger-timestamp'
import { sleep } from '@abw/badger-utils'
import { Button } from '@abw/badger-react-ui'
import { Consumer } from '@/palettes/Context.jsx'
import { download } from '@/lib/utils/download.js'

const Download = ({ palette }) => {
  const [downloaded, setDownloaded] = useState(false)
  const copy = () => {
    download(palette, `${palette.uri}-${now().kebab()}.json`)
    setDownloaded(true)
    sleep(2000).then(() => setDownloaded(false))
  }

  return downloaded
    ? <Button
        icon="check"
        color={Theme.colors.download}
        className="icon"
      />
    : <Button
        icon="download"
        color={Theme.colors.download}
        className="icon"
        onClick={copy}
        data-tooltip="bottom right"
        aria-label="Download data for this palette"
      />
}

export default Consumer(Download)