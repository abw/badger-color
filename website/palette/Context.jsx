import { useState } from 'react'
import { Generator } from '@abw/react-context'

const Context = ({source, render}) => {
  const [palette, setPalette] = useState(source)
  const [options, setOptions] = useState({
    names:  false,
    info:   false,
    grey:   false,
    show5s: false
  })
  const saveRange = range => setPalette(
    palette => ({
      ...palette,
      ranges: {
        ...palette.ranges,
        [range.name]: range
      }
    })
  )
  const setOption = (name, value) => setOptions({ ...options, [name]: value })
  const toggleOption = name => setOption(name, ! options[name])
  const toggler = name => () => toggleOption(name)
  const toggleNames  = toggler('names')
  const toggleInfo   = toggler('info')
  const toggleGrey   = toggler('grey')
  const toggleShow5s = toggler('show5s')

  const [editingRange, setEditingRange] = useState(false)

  return render({
    palette,
    options,
    saveRange,
    setOption, toggleOption,
    toggleNames, toggleInfo, toggleShow5s, toggleGrey,
    editingRange, setEditingRange
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: usePalette } = generated
export default generated