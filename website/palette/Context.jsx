import { useState } from 'react'
import { Generator } from '@abw/react-context'
import { usePalettes } from '../palettes/Context.jsx'

const Context = ({render}) => {
  const { palette: source } = usePalettes()
  const [palette, setPalette] = useState(source)
  console.log(`source palette: `, palette)

  const saveRange = range => setPalette(
    palette => ({
      ...palette,
      ranges: {
        ...palette.ranges,
        [range.name]: range
      }
    })
  )

  const [editingRange, setEditingRange] = useState(false)
  const editRange = name => setEditingRange(editingRange === name ? false : name)

  return render({
    palette,
    saveRange,
    editingRange, setEditingRange, editRange
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: usePalette } = generated
export default generated