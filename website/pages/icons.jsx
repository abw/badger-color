import React from 'react'
import { Button, IconLibrary } from '@abw/badger-react-ui'

const IconsPage = () =>
  <div>
    <h1>Icons</h1>
    <div className="grid-fit" style={{ '--min-width': '30px' }}>
      { Object.keys(IconLibrary.icons).map(
        name =>
          <div key={name}>
            <Button key={name} icon={name} solid/>
            <div className="smaller">{name}</div>
          </div>
      )}
    </div>
  </div>

export default IconsPage