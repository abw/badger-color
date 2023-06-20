import React from 'react'
import Icons from '../ui/Icons.jsx'
import Button from '../ui/Button.jsx'

const IconsPage = () =>
  <div>
    <h1>Icons</h1>
    <div className="grid-fit" style={{ '--min-width': '30px' }}>
      { Object.keys(Icons).map(
        name =>
          <div key={name}>
            <Button key={name} icon={name}/>
            <div className="smaller">{name}</div>
          </div>
      )}
    </div>
  </div>

export default IconsPage