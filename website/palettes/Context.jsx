import { useState } from 'react'
import { Generator } from '@abw/react-context'
import { loadPaletteApp, savePaletteApp } from '../../lib/utils/storage.js'
import { nameToURI, newPalette } from '../../lib/utils/palette.js'

const Context = ({render}) => {
  const app = loadPaletteApp()
  const [palettes, setPalettes] = useState(app.palettes || { })
  const [palette,  setPalette]  = useState(app.palette && app.palettes[app.palette])
  const selectPalette = uri => {
    const palette = palettes[uri]
    if (palette) {
      savePaletteApp({ palettes, palette: uri })
    }
    else {
      console.warn(`Invalid palette selected: ${uri}`)
    }
    setPalette(palette)
    return palette
  }

  const createPalette = () => {
    const p = newPalette(palettes)
    const uri = p.uri
    // console.log(`created palette: ${uri}`)
    const ps = { ...palettes, [uri]: p }
    // console.log(`new palettes: `, ps)
    setPalette(p)
    setPalettes(ps)
    savePaletteApp({ palettes: ps, palette: uri })
    return p
  }

  const renamePalette = name => {
    if (! palette) {
      return
    }
    const uri = nameToURI(name)
    const p = { ...palette, name, uri }
    const ps = { ...palettes }
    delete ps[palette.uri]
    ps[uri] = p
    setPalette(p)
    setPalettes(ps)
    savePaletteApp({ palettes: ps, palette: uri })
    return p
  }

  const deletePalette = () => {
    if (! palette) {
      return
    }
    const ps = { ...palettes }
    delete ps[palette.uri]
    setPalette(null)
    setPalettes(ps)
    savePaletteApp({ palettes: ps, palette: null })
  }

  const [options, setOptions] = useState({
    names:  true,
    stops:  true,
    info:   false,
    grey:   false,
    show5s: false,
  })
  const setOption = (name, value) => setOptions({ ...options, [name]: value })
  const toggleOption = name => setOption(name, ! options[name])
  const toggler = name => () => toggleOption(name)
  const toggleNames  = toggler('names')
  const toggleInfo   = toggler('info')
  const toggleGrey   = toggler('grey')
  const toggleShow5s = toggler('show5s')
  const toggleStops  = toggler('stops')


  return render({
    palettes,
    palette,
    selectPalette,
    createPalette,
    renamePalette,
    deletePalette,
    options,
    toggleNames,
    toggleInfo,
    toggleGrey,
    toggleShow5s,
    toggleStops
  })
}

const generated = Generator(Context)
export const { Provider: PalettesProvider, Consumer, Use: usePalettes } = generated
export default generated