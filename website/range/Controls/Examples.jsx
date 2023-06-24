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
  const ok = () => setOpen(false)
  const toggleDark = () => setDark( dark => ! dark )
  const styles = exportRangeCSSItems(range, { uri: 'color' })

  return (
    <>
      <Button
        color={Theme.colors.examples}
        solid
        icon="eye"
        onClick={() => setOpen(true)}
        className="mar-l-2"
      />
      <Modal open={open} className="text-left">
        <div className="flex space end mar-b-6">
          <h2 className="mar-v-none">Examples</h2>
          <Checkbox
            label="Dark"
            checked={dark}
            toggle={toggleDark}
          />
        </div>

        <div className={`examples ${dark ? 'dark' : 'light'}`} style={styles}>
          <Examples/>
        </div>
        <div className="text-right mar-t-8">
          <Button
            color={Theme.colors.ok}
            text="OK"
            iconRight="check"
            solid
            onClick={ok}
          />
        </div>
      </Modal>
    </>
  )
}

export default Consumer(ShowExamples)