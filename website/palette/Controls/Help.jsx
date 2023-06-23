import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Modal from '../../ui/Modal.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import ButtonHelp from '../../help/ButtonHelp.jsx'
import Theme from '../../site/Theme.jsx'

const Help = () => {
  const [open, setOpen] = useState(false)
  const ok = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        color={Theme.colors.help}
        solid
        icon="info"
        onClick={() => setOpen(true)}
        className="mar-l-2"
      />
      <Modal open={open}>
        <h2 className="mar-t-none mar-b-6">Help</h2>
        <ButtonHelp
          color={Theme.colors.delete}
          icon="trash"
          text="Delete the current palette"
          subtext="(you will be asked for confirmation)"
        />
        <ButtonHelp
          color={Theme.colors.clipboard}
          icon="clipboard"
          text="Copy palette data to clipboard"
        />
        <ButtonHelp
          color={Theme.colors.edit}
          icon="pen"
          text="Edit palette details"
        />
        <ButtonHelp
          color={Theme.colors.clone}
          icon="clone"
          text="Clone the current palette"
        />
        <ButtonHelp
          color={Theme.colors.help}
          icon="info"
          text="This help"
        />

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

export default Consumer(Help)