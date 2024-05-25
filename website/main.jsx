import React    from 'react'
import ReactDOM from 'react-dom/client'
import Router   from '@/site/Router.jsx'
import ThemeProvider from '@/theme/Provider.jsx'
import { SIDEBAR } from './site/Constants.jsx'
import { ThemeProvider as NightAndDay }    from '@abw/react-night-and-day'
import { RouterProvider, }  from 'react-router-dom'
import { PalettesProvider } from './palettes/Context.jsx'
import prepareIconLibrary from '@/ui/Icons.jsx'
import './styles/website.scss'

prepareIconLibrary()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NightAndDay storageKey="theme" defaultVariant={SIDEBAR}>
      <ThemeProvider>
        <PalettesProvider>
          <RouterProvider router={Router} />
        </PalettesProvider>
      </ThemeProvider>
    </NightAndDay>
  </React.StrictMode>,
)
