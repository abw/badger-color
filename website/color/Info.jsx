import React from 'react'
import Icon from '../ui/Icon.jsx'

const Info = ({color, stop, lockable}) =>
  <div className="info">
    <div className="flex space">
      <div className="stop">{stop}</div>
      { lockable && color.locked &&
        <div className="locked">
          <Icon name="lock"/>
        </div>
      }
    </div>
    <div className="specs">
      {color.hex}<br/>
      h:{color.h}&deg;<br/>
      s:{color.s}%<br/>
      l:{color.l}%
    </div>
  </div>

export default Info