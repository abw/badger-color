import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Modal from '../../ui/Modal.jsx'
import Theme from '../../site/Theme.jsx'
import Checkbox from '../../ui/Checkbox.jsx'
import Examples from '../../examples/index.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import { exportRangeCSSItems } from '../../../lib/export/palette.js'
import { useTheme } from '@abw/react-night-and-day'

const ShowExamples = ({ palette }) => {
  const { isDark } = useTheme()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(isDark)
  const close = () => setOpen(false)
  const toggleDark = () => setDark( dark => ! dark )

  return (
    <>
      <Button
        color={Theme.colors.examples}
        className="icon"
        icon="eye"
        onClick={() => setOpen(true)}
        data-tooltip="bottom right"
        aria-label="View examples using this palette"
      />
      <Modal open={open} close={close} className="text-left">
        <div className="flex space end mar-b-6">
          <h2 className="mar-v-none">Examples</h2>
          <div className="options pad-r-none">
            <Checkbox
              label="Dark"
              checked={dark}
              toggle={toggleDark}
            />
          </div>
        </div>
        <div className="grid-3 gap-4 stack-laptop">
          { Object.values(palette.ranges).map(
            range =>
              <div
                key={range.uri}
                className={`examples ${dark ? 'dark' : 'light'}`}
                style={exportRangeCSSItems(range, { uri: 'color' })}
              >
                <h2>{range.name}</h2>
                <Examples/>
              </div>
          )}
        </div>
        <div className="text-right mar-t-8">
          <Button
            color={Theme.colors.ok}
            text="OK"
            iconRight="check"
            solid
            onClick={close}
          />
        </div>
      </Modal>
    </>
  )
}

export default Consumer(ShowExamples)