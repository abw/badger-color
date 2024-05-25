import React from 'react'
import Controls from './Controls/index.jsx'
import { Consumer } from '@/palettes/Context.jsx'

const Header = ({ palette }) =>
  <header>
    <div className="flex space start stack-tablet">
      <h1>{palette.name}</h1>
      <Controls/>
    </div>
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
  </header>

export default Consumer(Header)