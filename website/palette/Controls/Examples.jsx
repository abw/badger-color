import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import Examples from '@/examples/index.jsx'
import { Consumer } from '@/palettes/Context.jsx'
import { useTheme } from '@abw/react-night-and-day'
import { exportRangeCSSItems } from '@/lib/export/palette.js'
import { Button, Modal, Checkbox } from '@abw/badger-react-ui'

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
        <header>
          <div className="flex space end">
            <h2 className="mar-v-none">Palette Examples</h2>
            <div className="options pad-r-none">
              <Checkbox
                text="Dark"
                checked={dark}
                onChange={toggleDark}
              />
            </div>
          </div>
        </header>
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
        <footer className="text-right mar-t-8">
          <Button
            color={Theme.colors.ok}
            text="OK"
            iconRight="check"
            onClick={close}
          />
        </footer>
      </Modal>
    </>
  )
}

export default Consumer(ShowExamples)