import React from 'react'
import Link  from './Link.jsx'
import { Icon }  from '@abw/badger-react-ui'
import { version } from './Utils.jsx'
import { Toggle, useTheme } from '@abw/react-night-and-day'
import { SIDEBAR, NO_SIDEBAR } from './Constants.jsx'
import { ReactComponent as Github } from '../svg/github.svg'


const Header = () => {
  const { variant, setVariant } = useTheme()
  return (
    <header>
      <nav>
        <div>
          <Icon
            name="bars"
            className="toggle-sidebar action"
            onClick={() => setVariant(variant === SIDEBAR ? NO_SIDEBAR : SIDEBAR)}
          />
          <Link to="/" className="home mar-l-2" text="Badger Color"/>
          <span className="small mar-l-2">v{version}</span>
        </div>
        <div>
          <a href="https://github.com/abw/badger-color">
            <Github className="night-and-day--icon mar-r-2"/>
          </a>
          <Toggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header
