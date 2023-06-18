import React, { useState } from 'react'
import Button from '../ui/Button.jsx'
import Modal from '../ui/Modal.jsx'
import { useNavigate } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'

const Delete = ({ deletePalette }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const cancel = () => {
    setOpen(false)
  }
  const confirm = () => {
    deletePalette()
    navigate('/')
  }

  return (
    <>
      <Button
        text="Delete Palette"
        color="red"
        solid
        iconRight="trash"
        onClick={() => setOpen(true)}
      />
      <Modal open={open}>
        <p>
          Are you sure you want to delete this palette?
        </p>
        <div className="flex space mar-t-8">
          <Button
            color="grey"
            text="Cancel"
            iconRight="cross"
            onClick={cancel}
          />
          <Button
            color="red"
            text="Delete"
            iconRight="trash"
            solid
            onClick={confirm}
          />
        </div>
      </Modal>
    </>
  )
}

export default Consumer(Delete)