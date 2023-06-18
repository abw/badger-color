import React from 'react'
import { ReactComponent as Badger } from '../svg/badger-color.svg'
import Icon from '../ui/Icon.jsx'

const Index = () =>
  <div>
    <div className="mobile block-center">
      <Badger/>
      <p className="intro mar-t-8">
        Badger-Color is set of tools for creating colors and color palettes.
      </p>
      <Icon name="github" className="larger icon"/>
      <Icon name="lock" className="larger icon"/>
      <Icon name="unlock" className="larger icon"/>
    </div>
  </div>

export default Index
