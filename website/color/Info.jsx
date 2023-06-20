import React from 'react'
import Icon from '../ui/Icon.jsx'
import { usePalettes } from '../palettes/Context.jsx'

const Info = ({color, stop, showLock}) => {
  const { options } = usePalettes()
  return (
    <div className="info">
      <div className={ options.info ? 'flex space' : 'text-right' }>
        { options.info &&
          <div className="stop">{stop}</div>
        }
        { showLock && color.locked &&
          <div className="locked">
            <Icon name="lock"/>
          </div>
        }
      </div>
      { options.info &&
        <div className="specs">
          {color.hex}<br/>
          h:{color.h}&deg;<br/>
          s:{color.s}%<br/>
          l:{color.l}%
        </div>
      }
    </div>
  )
}

export default Info