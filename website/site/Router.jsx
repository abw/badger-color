import React from 'react'
import Layout from './Layout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Edit from '../routes/Edit.jsx'

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
          path: 'edit/:uri',
          element: <Edit/>
        }
      ]
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router
