import { useState } from 'react'
import { Generator } from '@abw/react-context'

const Context = ({source, render}) => {
  const [palette, setPalette] = useState(source)
  const [options, setOptions] = useState({
    names:  false,
    info:   false,
    show5s: false
  })
  const saveRange = range => {
    // setPalette({
    const newPalette = ({
      ...palette,
      ranges: {
        ...palette.ranges,
        [range.name]: range
      }
    })
    console.log(`newPalette:`, newPalette)
    setPalette(palette)
  }
  const setOption = (name, value) =>
    setOptions({ ...options, [name]: value })
  const toggleOption = name =>
    setOption(name, ! options[name])
  const toggler = name => () => toggleOption(name)
  const toggleNames  = toggler('names')
  const toggleInfo   = toggler('info')
  const toggleShow5s = toggler('show5s')

  return render({
    palette,
    options,
    saveRange,
    setOption, toggleOption,
    toggleNames, toggleInfo, toggleShow5s
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: usePalette } = generated
export default generated