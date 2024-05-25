import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import { Consumer } from '@/palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from '@abw/badger-react-ui'

const Delete = ({ deletePalette }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const confirm = () => {
    deletePalette()
    navigate('/')
  }

  return (
    <>
      <Button
        color={Theme.colors.delete}
        className="icon"
        icon="trash"
        onClick={() => setOpen(true)}
        data-tooltip="bottom right"
        aria-label="Delete this palette"
      />
      <Modal open={open} close={close} className="text-left">
        <header>
          <h2 className="mar-v-none">
            Delete Palette?
          </h2>
        </header>
        <p className="large">
          Are you sure you want to delete this palette?
        </p>
        <footer className="flex space mar-t-8">
          <Button
            color={Theme.colors.cancel}
            text="Cancel"
            iconRight="cross"
            onClick={close}
            outline
          />
          <Button
            color={Theme.colors.delete}
            text="Delete"
            iconRight="trash"
            onClick={confirm}
          />
        </footer>
      </Modal>
    </>
  )
}

export default Consumer(Delete)