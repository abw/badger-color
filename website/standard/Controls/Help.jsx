import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import ButtonHelp from '@/help/ButtonHelp.jsx'
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
      />
      <Modal open={open} close={close} className="text-left">
        <h2 className="mar-t-none mar-b-6">Help</h2>
        <h3 className="mar-b-3">Palette Controls</h3>
        <ButtonHelp
          color={Theme.colors.examples}
          icon="eye"
          text="View UI examples"
        />
        <ButtonHelp
          color={Theme.colors.clipboard}
          icon="clipboard"
          text="Copy palette data to clipboard"
        />
        <ButtonHelp
          color={Theme.colors.download}
          icon="download"
          text="Download palette data as JSON"
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
            onClick={close}
          />
        </div>
      </Modal>
    </>
  )
}

export default Help