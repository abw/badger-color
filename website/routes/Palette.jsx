import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'
import { Outlet } from 'react-router-dom'
import Header from '../palette/Header.jsx'

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
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Consumer(Palette)