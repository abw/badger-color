import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import { URLS } from '@/site/URLS.jsx'
import { Consumer } from '@/palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from '@abw/badger-react-ui'

const Delete = ({ palette, deleteRange }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const confirm = () => {
    deleteRange()
    navigate(URLS.palette.home(palette.uri))
  }

  return (
    <>
      <Button
        color={Theme.colors.delete}
        className="icon"
        icon="trash"
        onClick={() => setOpen(true)}
        data-tooltip="top right"
        aria-label="Delete this range"
      />
      <Modal open={open} close={close} className="text-left">
        <header>
          <h2 className="mar-v-none">Delete Range?</h2>
        </header>
        <p className="large pad-h-2">
          Are you sure you want to delete this range?
        </p>
        <footer className="flex space mar-t-8">
          <Button
            color={Theme.colors.cancel}
            text="Cancel"
            className="icon"
            iconRight="cross"
            onClick={close}
          />
          <Button
            color={Theme.colors.delete}
            text="Delete"
            iconRight="trash"
            className="icon"
            onClick={confirm}
          />
        </footer>
      </Modal>
    </>
  )
}

export default Consumer(Delete)