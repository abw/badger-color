import React from 'react'
import { Consumer } from './Context.jsx'

const Footer = ({ palette }) =>
  <footer>
    <button
      onClick={
        () => navigator.clipboard.writeText(
          JSON.stringify(palette, null, 2)
        )
      }
    >
      Copy to Clipboard
    </button>
  </footer>

export default Consumer(Footer)