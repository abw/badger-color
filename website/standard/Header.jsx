import React from 'react'
import Button from '../ui/Button.jsx'
import { usePalettes } from '../palettes/Context.jsx'
import { usePalette } from './Context.jsx'
import { sleep } from '@abw/badger-utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { URLS } from '../site/URLS.jsx'

const Header = () => {
  const navigate = useNavigate()
  const { clonePalette } = usePalettes()
  const { palette } = usePalette()
  const [copied, setCopied] = useState(false)
  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }
  const onClonePalette = () => {
    const p = clonePalette(palette)
    navigate(URLS.palette.home(p.uri))
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
                <a href={palette.source}>{palette.source}</a>
              </div>
            }
          </div>
        </div>
        <div>
          { copied
            ? <Button
                // text="Copied"
                icon="check"
                color="violet"
                // className="wd-8"
                solid
              />
            : <Button
                icon="clipboard"
                color="violet"
                solid
                onClick={() => copy(JSON.stringify(palette, null, 2))}
              />
          }
          <Button
            icon="clone"
            color="green"
            className="mar-l-2"
            solid
            onClick={onClonePalette}
          />
        </div>
      </div>
    </header>
  )
}

export default Header