import { useState } from 'react'
import { Generator } from '@abw/react-context'
import { usePalette } from '../palette/Context.jsx'

const Context = ({name, render}) => {
  const { palette } = usePalette()
  const [range, setRange] = useState(palette.ranges[name])
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const toggleOpen = () => setOpen(! open)
  const toggleEditing = () => setEditing(! editing)

  return render({
    range, setRange,
    open, setOpen,
    editing, setEditing,
    toggleOpen, toggleEditing
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: useRange } = generated
export default generated