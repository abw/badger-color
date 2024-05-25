import React from 'react'
import { version, date } from './Utils.jsx'

const Footer = () =>
  <footer>
    <div className="flex space">
      <div>
        &copy; Copyright 2023 - 2024 Andy Wardley
      </div>
      <div>
        Version {version} {date}
      </div>
    </div>
  </footer>

export default Footer
