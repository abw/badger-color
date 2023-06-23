import React from 'react'
import Icon from '../ui/Icon.jsx'
import { usePalettes } from '../palettes/Context.jsx'

export const Info = ({color, stop, showLock, showStop}) => {
  const { options } = usePalettes()
  return (
    <div className="info">
      {/* <div className={ options.info ? 'flex space' : 'text-right' }> */}
      <div className="flex space">
        <div className="stop">
          { (options.info || showStop) && stop }
        </div>
        <div className="locked small">
          { showLock && color.locked && <Icon name="lock"/> }
        </div>
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