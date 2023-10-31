import React, { useRef, useEffect } from 'react'
import Icon from './Icon.jsx'

const Modal = ({
  open,
  close,
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
      { close &&
        <div className="close" onClick={close}>
          <Icon name="cross"/>
        </div>
      }
      <article>
        {children}
      </article>
    </dialog>
  )
}

export default Modal