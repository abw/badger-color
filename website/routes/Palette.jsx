import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'
import { Outlet } from 'react-router-dom'
import { Provider } from '../palette/Context.jsx'
import Header from '../palette/Header.jsx'
import Footer from '../palette/Footer.jsx'

const Palette = ({ palette, selectPalette }) => {
  const { uri } = useParams()

  useEffect(
    () => {
      selectPalette(uri)
    },
    [uri]
  )

  if (uri !== palette?.uri) {
    return <div className="loading">Loading...</div>
  }

  return (
    <Provider>
      <section className="palette">
        <Header/>
        <Outlet/>
        <Footer/>
      </section>
    </Provider>
  )
}

export default Consumer(Palette)
