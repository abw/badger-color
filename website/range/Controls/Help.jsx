import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import ButtonHelp from '@/help/ButtonHelp.jsx'
import { Consumer } from '@/palettes/Context.jsx'
import { Button, Modal } from '@abw/badger-react-ui'

const Help = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button
        color={Theme.colors.help}
        className="icon"
        icon="info"
        onClick={() => setOpen(true)}
        data-tooltip="top right"
        aria-label="Help for range controls"

      />
      <Modal open={open} close={close} className="text-left">
        <header>
          <h2 className="mar-t-none">Range Help</h2>
        </header>
        <h3 className="mar-b-3">Range Controls</h3>
        <ButtonHelp
          color={Theme.colors.delete}
          icon="trash"
          text="Delete the current range"
          subtext="(you will be asked for confirmation)"
        />
        <ButtonHelp
          color={Theme.colors.edit}
          icon="pen"
          text="Edit range details"
        />
        <ButtonHelp
          color={Theme.colors.clone}
          icon="clone"
          text="Clone the current range"
        />
        <ButtonHelp
          color={Theme.colors.examples}
          icon="eye"
          text="View UI examples"
        />
        <ButtonHelp
          color={Theme.colors.clipboard}
          icon="clipboard"
          text="Copy range data to clipboard"
        />
        <ButtonHelp
          color={Theme.colors.download}
          icon="download"
          text="Download range data as JSON"
        />
        <ButtonHelp
          color={Theme.colors.help}
          icon="info"
          text="This help"
        />
        <h3 className="mar-b-3">Stop / Curve Controls</h3>
        <ButtonHelp
          color={Theme.colors.option}
          icon="pen"
          text="Enable click to edit swatch"
        />
        <ButtonHelp
          color={Theme.colors.option}
          icon="locked"
          text="Enable click to lock swatch"
        />
        <ButtonHelp
          color={Theme.colors.undo}
          icon="undo"
          text="Undo changes"
        />
        <ButtonHelp
          color={Theme.colors.commit}
          icon="arrow-up"
          text="Commit changes"
        />
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

export default Consumer(Help)