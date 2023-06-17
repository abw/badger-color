import { useState } from 'react'
import { Generator } from '@abw/react-context'

const Context = ({source, render}) => {
  const [palette, setPalette] = useState(source)
  const [options, setOptions] = useState({
    names:  false,
    // stops:  false,
    info:   false,
    show5s: false
  })
  const setOption = (name, value) =>
    setOptions({ ...options, [name]: value })
  const toggleOption = name =>
    setOption(name, ! options[name])
  const toggler = name => () => toggleOption(name)
  const toggleNames  = toggler('names')
  // const toggleStops  = toggler('stops')
  const toggleInfo   = toggler('info')
  const toggleShow5s = toggler('show5s')

  return render({
    palette,
    options,
    setOption, toggleOption,
    toggleNames, toggleInfo, toggleShow5s
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: usePalette } = generated
export default generated