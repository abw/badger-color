import React from 'react'
import Layout from './Layout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Palette from '../routes/Palette.jsx'
import Home from '../routes/Palette/Home.jsx'
import Edit from '../routes/Palette/Edit.jsx'

const ROUTES = import.meta.globEager('../pages/**/[a-z]*.jsx')
const routes = Object.entries(ROUTES).map(
  ([route, module]) => ({
    path: route
      .replace(/^[./]*pages/, '')
      .replace(/\.jsx$/, '')
      .replace(/index$/, ''),
    Component: module.default
  })
)

const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        ...routes,
        {
          path: 'palette/:uri/*',
          element: <Palette/>,
          children: [
            {
              index: true,
              element: <Home/>,
            },
            {
              path: 'edit',
              element: <Edit/>
            },
          ]
        }
      ]
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router
