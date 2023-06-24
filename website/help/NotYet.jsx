import React, { useState } from 'react'
import Button from '../ui/Button.jsx'
import Modal from '../ui/Modal.jsx'
import Theme from '../site/Theme.jsx'

const Help = ({ className }) => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button
        color={Theme.colors.help}
        solid
        icon="info"
        className={className}
        onClick={() => setOpen(true)}
      />
      <Modal open={open} close={close} className="text-left">
        <h2 className="mar-t-none mar-b-6">No Not Yet!</h2>
        <p>
          Push that button once you&apos;ve selected a palette.
        </p>
        <div className="text-right mar-t-8">
          <Button
            color={Theme.colors.ok}
            text="Sorry, I'm a Muppet"
            iconRight="check"
            solid
            onClick={close}
          />
        </div>
      </Modal>
    </>
  )
}

export default Help