import React from 'react'
import Link from '../Link.jsx'
import { URLS } from '../URLS.jsx'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PaletteMenu from './PaletteMenu.jsx'

const PaletteLink = ({
  p,
  uri,
  palette,
  newRange
})  =>
  <div>
    <Link
      to={URLS.palette.home(uri)}
      className="item"
      text={p.name}
    />
    { palette &&
    <Routes>
      <Route
        path={`${URLS.palette.home(uri)}/*`}
        element={<PaletteMenu palette={palette} newRange={newRange}/>}
      >
      </Route>
    </Routes>
    }
  </div>

export default PaletteLink
