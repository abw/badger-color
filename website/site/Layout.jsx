import React    from 'react'
import Header   from './Header.jsx'
import Sidebar  from './Sidebar.jsx'
import Footer   from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@abw/react-night-and-day'

const Layout = () => {
  const { theme, variant } = useTheme()
  return (
    <div id="site" className={`${theme} ${variant}`}>
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
