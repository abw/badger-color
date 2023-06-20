import React from 'react'
import Info from './Info.jsx'
import { hslToGrey, hslToLuminance } from '../../lib/utils/color.js'
import Icon from '../ui/Icon.jsx'
import { usePalettes } from '../palettes/Context.jsx'

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
  const { options } = usePalettes()
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