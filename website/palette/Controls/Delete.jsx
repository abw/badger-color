import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Modal from '../../ui/Modal.jsx'
import Theme from '../../site/Theme.jsx'
import { useNavigate } from 'react-router-dom'
import { Consumer } from '../../palettes/Context.jsx'

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
        color={Theme.colors.delete}
        solid
        icon="trash"
        onClick={() => setOpen(true)}
      />
      <Modal open={open}>
        <p>
          Are you sure you want to delete this palette?
        </p>
        <div className="flex space mar-t-8">
          <Button
            color={Theme.colors.cancel}
            text="Cancel"
            iconRight="cross"
            onClick={cancel}
          />
          <Button
            color={Theme.colors.delete}
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