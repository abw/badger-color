import React from 'react'
import Controls from './Controls/index.jsx'
import Name from './Name.jsx'
import { Consumer } from '../palettes/Context.jsx'
import Options from '../palettes/Options.jsx'

const Header = ({ palette }) =>
  <header>
    <div className="flex space start">
      <div>
        <Name/>
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
      <Controls/>
    </div>
    <Options/>
  </header>

export default Consumer(Header)