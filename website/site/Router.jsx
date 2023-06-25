import React from 'react'
import Layout from './Layout.jsx'
import Palette from '../palette/index.jsx'
import Main from '../palette/Main.jsx'
import Range from '../range/index.jsx'
import { createBrowserRouter } from 'react-router-dom'

const ROUTES = import.meta.globEager('../pages/**/[a-z]*.jsx')
const routes = Object.entries(ROUTES).map(
  ([route, module]) => ({
    path: route
      .replace(/^[./]*pages/, '')
      .replace(/\.jsx$/, '')
      .replace(/index$/, '')
      .replace(/^\//, ''),
    Component: module.default
  })
)

const Router = createBrowserRouter(
  [
    {
      path:     '/*',
      element:  <Layout/>,
      children: [
        ...routes,
        {
          path: 'palette/:puri/*',
          element: <Palette/>,
          children: [
            {
              index: true,
              element: <Main/>,
            },
            {
              path: 'range/:ruri/*',
              element: <Range/>,
              /*
              children: [
                {
                  index: true,
                  element: <Main/>,
                },
              ]
              */
            }
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
