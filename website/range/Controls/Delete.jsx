import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Modal from '../../ui/Modal.jsx'
import { useNavigate } from 'react-router-dom'
import { Consumer } from '../../palettes/Context.jsx'
import { URLS } from '../../site/URLS.jsx'

const Delete = ({ palette, deleteRange }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const cancel = () => {
    setOpen(false)
  }
  const confirm = () => {
    deleteRange()
    navigate(URLS.palette.home(palette.uri))
  }

  return (
    <>
      <Button
        color="red"
        solid
        icon="trash"
        onClick={() => setOpen(true)}
        className="mar-l-2"
      />
      <Modal open={open}>
        <p>
          Are you sure you want to delete this range?
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