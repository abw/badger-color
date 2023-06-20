import React from 'react'
import Button from '../ui/Button.jsx'
import { usePalette } from './Context.jsx'
import { sleep } from '@abw/badger-utils'
import { useState } from 'react'
import Options from './Options.jsx'

const Header = () => {
  const { palette } = usePalette()
  const [copied, setCopied] = useState(false)
  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }

  return (
    <header>
      <div className="flex space start">
        <div>
          <h1>{palette.name}</h1>
          <div className="info">
            { palette.comment &&
              <div className="comment">
                {palette.comment}
              </div>
            }
            { palette.source &&
              <div className="source">
                From: <a href={palette.source}>{palette.source}</a>
              </div>
            }
          </div>
        </div>
        <div>
          { copied
            ? <Button
                text="Copied"
                iconRight="check"
                color="violet"
                className="wd-8"
                solid
              />
            : <Button
                text="Copy"
                iconRight="clipboard"
                color="violet"
                className="wd-8"
                onClick={() => copy(JSON.stringify(palette, null, 2))}
              />
          }
        </div>
      </div>
      <Options/>
    </header>
  )
}

export default Header