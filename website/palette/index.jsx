import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
import { Provider } from './Context.jsx'

const Palette = ({palette}) =>
  <Provider source={palette}>
    <section className="palette">
      <Header/>
      <Main/>
      <Footer/>
    </section>
  </Provider>

export default Palette