import React from 'react'
import config from './config.js'
import { Theme } from '@abw/badger-react-ui'

export const ThemeProvider = ({ children, ...props }) =>
  <Theme.Provider {...config} {...props}>
    {children}
  </Theme.Provider>

export default ThemeProvider