import React from 'react'
import Ranges from './Ranges.jsx'
import { Provider } from './Context.jsx'

const Palette = ({palette}) =>
  <Provider source={palette}>
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
        <Ranges/>
      </main>
    </section>
  </Provider>

export default Palette