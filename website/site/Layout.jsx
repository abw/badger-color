import React from 'react'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import { useTheme } from '@abw/react-night-and-day'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const { theme } = useTheme()
  return (
    <div id="site" className={theme}>
      <Header/>
      <div id="app">
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Outlet/>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
