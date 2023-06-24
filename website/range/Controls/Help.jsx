import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Modal from '../../ui/Modal.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import ButtonHelp from '../../help/ButtonHelp.jsx'
import Theme from '../../site/Theme.jsx'

const Help = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button
        color={Theme.colors.help}
        solid
        icon="info"
        onClick={() => setOpen(true)}
      />
      <Modal open={open} close={close} className="text-left">
        <h2 className="mar-t-none mar-b-6">Help</h2>
        <h3 className="mar-b-3">Range Controls</h3>
        <ButtonHelp
          color={Theme.colors.delete}
          icon="trash"
          text="Delete the current range"
          subtext="(you will be asked for confirmation)"
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
          color={Theme.colors.help}
          icon="info"
          text="This help"
        />
        <h3 className="mar-b-3">Stop / Curve Controls</h3>
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

export default Consumer(Help)