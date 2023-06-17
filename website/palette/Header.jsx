import React from 'react'
import Checkbox from '../ui/Checkbox.jsx'
import { usePalette } from './Context.jsx'

const Header = () => {
  const {
    palette,
    options,
    toggleNames, toggleInfo, toggleShow5s, toggleGrey
  } = usePalette()

  return (
    <header>
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
      <div className="options gap-4 mar-b-4">
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