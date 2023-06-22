import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
// import Footer from './Footer.jsx'

const Palette = ({ palette, selectPalette }) => {
  const { puri } = useParams()

  useEffect(
    () => { selectPalette(puri) },
    [puri]
  )

  if (puri !== palette?.uri) {
    return <div className="loading">Loading...</div>
  }

  // console.log(`selected palette: `, palette)

  return (
    <section className="palette">
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </section>
  )
}

export default Consumer(Palette)
