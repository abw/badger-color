import React from 'react'
import Info from './Info.jsx'
import { usePalette } from '../palette/Context.jsx'
import { hslToGrey, hslToLuminance } from '../../lib/utils/color.js'
import Icon from '../ui/Icon.jsx'

const Swatch = ({
  color, stop,
  onClick,
  clickable,
  lockable,
  copyable,
  showLock=lockable,
  lockIcon='lock',
  unlockIcon='unlock',
  copyIcon='arrow-up',
}) => {
  const { options } = usePalette()
  const bgcol = options.grey
    ? hslToGrey(color)
    : `hsl(${color.h} ${color.s}% ${color.l}%)`
  const lum = hslToLuminance(color)

  let classes = ['swatch', lum > 0.5 ? 'light' : 'dark']
  if (onClick || clickable) {
    classes.push('clickable')
  }
  if (lockable) {
    classes.push('lockable')
    classes.push(color.locked ? 'locked' : 'unlocked')
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={onClick}
      style={{
        backgroundColor: bgcol
      }}
    >
      <Info color={color} stop={stop} showLock={showLock}/>
      { lockable &&
        <div className="hover-overlay">
          <Icon name={color.locked ? unlockIcon : lockIcon}/>
        </div>
      }
      { copyable &&
        <div className="hover-overlay">
          <Icon name={copyIcon}/>
        </div>
      }
    </div>
  )
}

export default Swatch