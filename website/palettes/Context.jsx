import { useState } from 'react'
import { Generator } from '@abw/react-context'
import { fail } from '@abw/badger-utils'
import {
  setHex,
  loadPaletteApp, savePaletteApp,
  copyPalette, newPalette,
  newRange,
  hStopValueFromRange,
  sStopValueFromRange,
  lStopValueFromRange,
  hslAtStopFromRange,
  stopValueFromCurve,
  copyRange
} from '../../lib/utils/index.js'

const Context = ({render}) => {
  //--------------------------------------------------------------------------
  // Options
  //--------------------------------------------------------------------------
  const [options, setOptions] = useState({
    names:      true,
    info:       false,
    blackWhite: false,
    show5s:     false,
    grey:       false,
  })
  const setOption        = (name, value) => setOptions({ ...options, [name]: value })
  const toggleOption     = name => setOption(name, ! options[name])
  const toggler          = name => () => toggleOption(name)
  const toggleNames      = toggler('names')
  const toggleInfo       = toggler('info')
  const toggleGrey       = toggler('grey')
  const toggleShow5s     = toggler('show5s')
  const toggleBlackWhite = toggler('blackWhite')

  //--------------------------------------------------------------------------
  // Palettes
  //--------------------------------------------------------------------------
  const app = loadPaletteApp()
  const [palettes, setPalettes] = useState(app.palettes || { })
  const [palette,  setPalette]  = useState(null)

  const savePalettes = palettes => {
    setPalettes(palettes)
    savePaletteApp({ palettes })
  }

  //--------------------------------------------------------------------------
  // Palette
  //--------------------------------------------------------------------------
  const selectPalette = uri => {
    const palette = palettes[uri] || fail(`Invalid palette selected: ${uri}`)
    setPalette(palette)
    return palette
  }

  const savePalette = p => {
    const uri = p.uri
    const ps = { ...palettes, [uri]: p }
    savePalettes(ps)
    setPalette(p)
    return p
  }

  const createPalette = () =>
    savePalette( newPalette(palettes) )

  const clonePalette = p =>
    savePalette( copyPalette(p, palettes) )

  const editPalette = details => {
    if (! palette) {
      return
    }
    const uri = details.uri
    const p = { ...palette, ...details }
    const ps = { ...palettes }
    delete ps[palette.uri]
    ps[uri] = p
    savePalettes(ps, p)
    setPalette(p)
    return p
  }

  const deletePalette = () => {
    if (! palette) {
      return
    }
    const ps = { ...palettes }
    delete ps[palette.uri]
    savePalettes(ps, null)
  }

  //--------------------------------------------------------------------------
  // Range
  //--------------------------------------------------------------------------
  const [range, setRange] = useState(null)

  const selectRange = uri => {
    console.log(`selectRange(${uri}): `)
    const range = palette?.ranges?.[uri] || fail(`Invalid range selected: ${uri}`)
    range.uri = uri
    setRange(range)
    return range
  }

  const resetRange = () => setRange(palette.ranges[range.uri])

  const saveRange  = (r=range) => {
    savePalette({
      ...palette,
      ranges: {
        ...palette.ranges,
        [r.uri]: r
      }
    })
    return r
  }
  const copyRangeToPalette = () => saveRange(range)

  const createRange = options =>
    saveRange( newRange(palette.ranges, options) )

  const cloneRange = r =>
    saveRange( copyRange(r, palette.ranges) )

  const editRange = details => {
    if (! range) {
      return
    }
    const uri = details.uri
    const r = { ...range, ...details }
    const ranges = { ...palette.ranges }
    delete ranges[range.uri]
    ranges[uri] = r
    savePalette({ ...palette, ranges })
    setRange(r)
    return r
  }

  const deleteRange = () => {
    if (! range) {
      return
    }
    const ranges = { ...palette.ranges }
    delete ranges[range.uri]
    savePalette({ ...palette, ranges })
  }

  //--------------------------------------------------------------------------
  // Range stops
  //--------------------------------------------------------------------------
  const setStops   = stops => setRange( range => ({ ...range, stops }) )
  const setStop    = (stop, color) => setStops({ ...range.stops, [stop]: setHex(color) })
  const setHStop   = (stop, h) => setStop(stop, { ...range.stops[stop], h })
  const setSStop   = (stop, s) => setStop(stop, { ...range.stops[stop], s })
  const setLStop   = (stop, l) => setStop(stop, { ...range.stops[stop], l })
  const lockStop   = stop => setStop(stop, { ...range.stops[stop], locked: true  })
  const unlockStop = stop => setStop(stop, { ...range.stops[stop], locked: false })
  const toggleLock = stop => range.stops[stop].locked ? unlockStop(stop) : lockStop(stop)
  const resetStops = () => setStops(palette.ranges[range.uri].stops)

  // reset stops to their original h/s/l
  const resetStopsItem = item => setStops(
    Object.entries(range.stops).reduce(
      (stops, [stop, color]) => {
        stops[stop] = setHex({
          ...color,
          [item]: palette.ranges[range.uri].stops[stop][item]
        })
        return stops
      },
      { }
    )
  )

  //--------------------------------------------------------------------------
  // Range curves
  //--------------------------------------------------------------------------
  // functions to update curves
  const setCurves   = curves => setRange( range => ({ ...range, curves }) )
  const setHCurve   = h      => setCurves({ ...range.curves, h })
  const setSCurve   = s      => setCurves({ ...range.curves, s })
  const setLCurve   = l      => setCurves({ ...range.curves, l })
  const modHCurve   = mods   => setHCurve({ ...range.curves.h, ...mods })
  const modSCurve   = mods   => setSCurve({ ...range.curves.s, ...mods })
  const modLCurve   = mods   => setLCurve({ ...range.curves.l, ...mods })
  const resetCurves = ()     => setCurves(palette.ranges[range.uri].curves)

  // calculate h/s/l stop values from a curve
  const hAtStop     = stop   => hStopValueFromRange(stop, range)
  const sAtStop     = stop   => sStopValueFromRange(stop, range)
  const lAtStop     = stop   => lStopValueFromRange(stop, range)
  const hslAtStop   = stop   => hslAtStopFromRange(stop, range)

  // reset an h/s/l curve to its original settings
  const resetCurveItem = item =>
    setCurves({
      ...range.curves,
      [item]: palette.ranges[range.uri].curves[item]
    })

  // update stop for an h/s/l value calculated from curve
  const curveToStopsItem = item => setStops(
    Object.entries(range.stops).reduce(
      (stops, [stop, color]) => {
        stops[stop] = color.locked
          ? color
          : setHex({
            ...color,
            [item]: stopValueFromCurve(stop, range.curves[item])
          })
        return stops
      },
      { }
    )
  )

  // update all of h/s/l for stops from curves
  const curvesToStops = () => setStops(
    Object.entries(range.stops).reduce(
      (stops, [stop, color]) => {
        stops[stop] = color.locked
          ? color
          : hslAtStop(stop)
        return stops
      },
      { }
    )
  )

  // copy values calculated from curves to a single stop
  const curvesToStop = stop => setStop(
    stop,
    hslAtStop(stop)
  )

  const controls = {
    h: {
      setStop:        setHStop,
      setMin:         min => modHCurve({ min }),
      setMax:         max => modHCurve({ max }),
      setMinControl:  minControl => modHCurve({ minControl }),
      setMaxControl:  maxControl => modHCurve({ maxControl }),
      resetCurve:     () => resetCurveItem('h'),
      resetStops:     () => resetStopsItem('h'),
      curveToStops:   () => curveToStopsItem('h'),
    },
    s: {
      setStop:        setSStop,
      setMin:         min => modSCurve({ min }),
      setMax:         max => modSCurve({ max }),
      setMinControl:  minControl => modSCurve({ minControl }),
      setMaxControl:  maxControl => modSCurve({ maxControl }),
      resetCurve:     () => resetCurveItem('s'),
      resetStops:     () => resetStopsItem('s'),
      curveToStops:   () => curveToStopsItem('s'),
    },
    l: {
      setStop:        setLStop,
      setMin:         min => modLCurve({ min }),
      setMax:         max => modLCurve({ max }),
      setMinControl:  minControl => modLCurve({ minControl }),
      setMaxControl:  maxControl => modLCurve({ maxControl }),
      resetCurve:     () => resetCurveItem('l'),
      resetStops:     () => resetStopsItem('l'),
      curveToStops:   () => curveToStopsItem('l'),
    }
  }

  return render({
    // options
    options,
    toggleNames,
    toggleInfo,
    toggleGrey,
    toggleShow5s,
    toggleBlackWhite,
    // palettes
    palettes,
    palette,
    selectPalette,
    createPalette,
    clonePalette,
    // renamePalette,
    editPalette,
    deletePalette,
    // ranges
    range,
    selectRange,
    resetRange,
    copyRangeToPalette,
    createRange,
    cloneRange,
    editRange,
    deleteRange,
    // curves and stops
    controls,
    curvesToStop,
    curvesToStops,
    resetStops,
    resetCurves,
    lockStop,
    unlockStop,
    toggleLock,
    hAtStop,
    sAtStop,
    lAtStop,
    hslAtStop,
  })
}

const generated = Generator(Context)
export const { Provider: PalettesProvider, Consumer, Use: usePalettes } = generated
export default generated