import React from 'react'
import Icon from '../ui/Icon.jsx'
import { usePalettes } from '../palettes/Context.jsx'
import Specs from './Specs.jsx'
import SpecsTable from './SpecsTable.jsx'

export const Info = ({
  color,
  stop,
  showLock,
  showStop,
}) => {
  const { options } = usePalettes()
  return (
    <div className="info">
      <div className="flex space">
        <div className="stop">
          { (options.info || showStop) && stop }
        </div>
        <div className="locked small">
          { showLock && color.locked && <Icon name="lock"/> }
        </div>
      </div>
      { options.info
        ? <Specs color={color}/>
        : <div className="tooltip pad-1">
            <SpecsTable color={color}/>
          </div>
      }
    </div>
  )
}

export default Info