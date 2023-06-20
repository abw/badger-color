import React from 'react'
import Checkbox from '../ui/Checkbox.jsx'
import Button from '../ui/Button.jsx'
import { usePalette } from './Context.jsx'
import { sleep } from '@abw/badger-utils'
import { useState } from 'react'

const Header = () => {
  const {
    palette,
    options,
    toggleNames, toggleInfo, toggleShow5s, toggleGrey
  } = usePalette()
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
          {/*
          <button
            className="mar-l-2"
            onClick={
              () => navigator.clipboard.writeText(
                base64CompressedPalette(palette)
              )
            }
          >
            Copy Compressed
          </button>
          */}
        </div>
      </div>
      <div className="options gap-4 mar-v-4">
        <Checkbox
          label="Show Names"
          checked={options.names}
          toggle={toggleNames}
        />
        <Checkbox
          label="Show Info"
          checked={options.info}
          toggle={toggleInfo}
        />
        <Checkbox
          label="Show 5s"
          checked={options.show5s}
          toggle={toggleShow5s}
        />
        <Checkbox
          label="Greyscale"
          checked={options.grey}
          toggle={toggleGrey}
        />
      </div>

    </header>
  )
}

export default Header