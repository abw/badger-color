import React from 'react'
import Ranges from './Ranges.jsx'

const Palette = ({palette}) =>
  <section className="palette">
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
    </header>
    <main>
      <Ranges palette={palette}/>
    </main>
  </section>

export default Palette