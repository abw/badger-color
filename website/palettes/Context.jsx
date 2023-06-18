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
    console.log(`select palette ${uri}: `, palette)
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
  }

  const renamePalette = (name) => {
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

  return render({
    palettes,
    palette,
    selectPalette,
    createPalette,
    renamePalette
  })
}

const generated = Generator(Context)
export const { Provider: PalettesProvider, Consumer, Use: usePalettes } = generated
export default generated