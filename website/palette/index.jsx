import React, { useEffect } from 'react'
import Header from './Header.jsx'
import { Outlet } from 'react-router-dom'
import { Consumer } from '@/palettes/Context.jsx'
import { useParams } from 'react-router-dom'

const Palette = ({ palette, selectPalette, options }) => {
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
    <section className={`palette ${options.tooltips ? '' : 'no-tooltips'}`}>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </section>
  )
}

export default Consumer(Palette)
