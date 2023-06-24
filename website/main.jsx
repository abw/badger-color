import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './site/Router.jsx'
import { RouterProvider, } from 'react-router-dom'
import { ThemeProvider } from '@abw/react-night-and-day'
import { PalettesProvider } from './palettes/Context.jsx'
import './styles/website.scss'
import { SIDEBAR } from './site/Constants.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider storageKey="theme" defaultVariant={SIDEBAR}>
      <PalettesProvider>
        <RouterProvider router={Router} />
      </PalettesProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
