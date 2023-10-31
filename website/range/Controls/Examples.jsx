import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Modal from '../../ui/Modal.jsx'
import Theme from '../../site/Theme.jsx'
import Examples from '../../examples/index.jsx'
import Checkbox from '../../ui/Checkbox.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import { exportRangeCSSItems } from '../../../lib/export/palette.js'
import { useTheme } from '@abw/react-night-and-day'

const ShowExamples = ({ range }) => {
  const { isDark } = useTheme()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(isDark)
  const close = () => setOpen(false)
  const toggleDark = () => setDark( dark => ! dark )
  const styles = exportRangeCSSItems(range, { uri: 'color' })

  return (
    <>
      <Button
        color={Theme.colors.examples}
        className="icon"
        icon="eye"
        onClick={() => setOpen(true)}
        data-tooltip="top right"
        aria-label="View examples using this range"

      />
      <Modal open={open} close={close} className="text-left">
        <header>
          <div className="flex space end">
            <h2 className="mar-v-none">Range Examples</h2>
            <div className="options pad-r-none">
              <Checkbox
                label="Dark"
                checked={dark}
                toggle={toggleDark}
              />
            </div>
          </div>
        </header>

        <div className={`examples ${dark ? 'dark' : 'light'}`} style={styles}>
          <Examples/>
        </div>
        <footer className="text-right mar-t-8">
          <Button
            color={Theme.colors.ok}
            text="OK"
            iconRight="check"
            solid
            onClick={close}
          />
        </footer>
      </Modal>
    </>
  )
}

export default Consumer(ShowExamples)