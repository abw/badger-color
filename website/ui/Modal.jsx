import React, { useRef, useEffect } from 'react'

const Modal = ({
  open,
  className,
  children
}) => {
  const ref = useRef(null)

  useEffect(
    () => {
      const { current: el } = ref
      if (open) {
        el.showModal()
      }
      else {
        el.close()
      }
    },
    [open]
  )

  return (
    <dialog
      ref={ref}
      className={className}
    >
      {children}
    </dialog>
  )
}

export default Modal