import React  from 'react'
import Link   from './Link.jsx'
import { Toggle } from '@abw/react-night-and-day'
import { ReactComponent as Github } from '../svg/github.svg'

const Header = () =>
  <header>
    <nav>
      <Link to="/" className="home" text="Badger-Color"/>
      <div>
        <a href="https://github.com/abw/badger-color">
          <Github className="night-and-day--icon mar-r-2"/>
        </a>
        <Toggle/>
      </div>
    </nav>
  </header>

export default Header
