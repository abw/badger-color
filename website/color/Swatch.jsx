import React from 'react'
import Info from './Info.jsx'
import { Icon } from '@abw/badger-react-ui'
import { usePalettes } from '@/palettes/Context.jsx'
import { hslToCSS, hslToGrey, hslToLuminance } from '@/lib/utils/color.js'

export const Swatch = ({
  color, stop,
  onClick,
  clickable,
  lockable,
  copyable,
  editable,
  showLock=lockable,
  lockIcon='locked',
  unlockIcon='unlocked',
  copyIcon='arrow-up',
  editIcon='pen',
}) => {
  const { options } = usePalettes()
  const bgcol = options.grey
    ? hslToGrey(color)
    : hslToCSS(color)
  const lum = hslToLuminance(color)

  let classes = ['swatch', lum > 0.5 ? 'light' : 'dark']
  if (onClick || clickable) {
    classes.push('clickable')
  }
  if (lockable) {
    classes.push('lockable')
    classes.push(color.locked ? 'locked' : 'unlocked')
  }
  classes.push('always-tooltip')

  return (
    <div
      className={classes.join(' ')}
      onClick={onClick}
      data-tooltip={options.info ? null : 'bottom'}
      style={{
        backgroundColor: bgcol
      }}
    >
      <Info
        color={color}
        stop={stop}
        showLock={showLock}
      />
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
      { editable &&
        <div className="hover-overlay">
          <Icon name={editIcon}/>
        </div>
      }
    </div>
  )
}

export default Swatch