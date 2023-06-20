import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import { Provider } from './Context.jsx'

const Palette = ({palette}) =>
  <Provider palette={palette}>
    <section className="palette">
      <Header/>
      <Main/>
    </section>
  </Provider>

export default Palette