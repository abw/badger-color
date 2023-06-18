import React from 'react'
import Info from './Info.jsx'
import { usePalette } from '../palette/Context.jsx'
import { hslToGrey, hslToLuminance } from '../../lib/utils/color.js'
import Icon from '../ui/Icon.jsx'

const Swatch = ({color, stop, onClick, clickable, lockable}) => {
  const { options } = usePalette()
  const bgcol = options.grey
    ? hslToGrey(color)
    : `hsl(${color.h} ${color.s}% ${color.l}%)`
  const lum = hslToLuminance(color)

  let classes = ['swatch', lum > 0.5 ? 'light' : 'dark']
  if (clickable) {
    classes.push('clickable')
  }
  if (lockable) {
    classes.push('lockable clickable')
    classes.push(color.locked ? 'locked' : 'unlocked')
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={onClick}
      style={{
        backgroundColor: bgcol,
      }}
    >
      { options.info &&
        <Info color={color} stop={stop} lockable={lockable}/>
      }
      { color.locked && ! options.info &&
        <div className="info">
          <div className="text-right">
            <div className="locked">
              <Icon name="lock"/>
            </div>
          </div>
        </div>
      }
      { lockable &&
        <div className="hover-overlay">
          <Icon name={color.locked ? 'unlock' : 'lock'}/>
        </div>
      }
    </div>
  )
}

export default Swatch