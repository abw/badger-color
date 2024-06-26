import React, { useState } from 'react'
import Form from '../Edit.jsx'
import Theme from '@/site/Theme.jsx'
import { Button, Modal } from '@abw/badger-react-ui'
import { Consumer } from '@/palettes/Context.jsx'

const Edit = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <Button
        color={Theme.colors.edit}
        icon="pen"
        onClick={() => setOpen(true)}
        className="icon"
        data-tooltip="top right"
        aria-label="Edit range metadata"

      />
      <Modal open={open} close={close} className="text-left">
        <Form close={close}/>
      </Modal>
    </>
  )
}

export default Consumer(Edit)