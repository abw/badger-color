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
    names:  true,
    stops:  true,
    info:   false,
    grey:   false,
    show5s: false,
  })
  const setOption    = (name, value) => setOptions({ ...options, [name]: value })
  const toggleOption = name => setOption(name, ! options[name])
  const toggler      = name => () => toggleOption(name)
  const toggleNames  = toggler('names')
  const toggleInfo   = toggler('info')
  const toggleGrey   = toggler('grey')
  const toggleShow5s = toggler('show5s')
  const toggleStops  = toggler('stops')

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

  /*



  const renameRange = name => {
    if (! range) {
      return
    }
    const uri = nameToURI(name)
    const p = { ...palette, name, uri }
    const ps = { ...palettes }
    delete ps[palette.uri]
    ps[uri] = p
    savePalettes(ps, p)
    return p
  }

  */

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
  const resetHStops = () => resetStopsItem('h')
  const resetSStops = () => resetStopsItem('s')
  const resetLStops = () => resetStopsItem('l')
  const resetStops  = () => setStops(palette.ranges[range.uri].stops)

  //--------------------------------------------------------------------------
  // Range curves
  //--------------------------------------------------------------------------
  // functions to update curves
  const setCurves = curves => setRange( range => ({ ...range, curves }) )
  const setHCurve = h      => setCurves({ ...range.curves, h })
  const setSCurve = s      => setCurves({ ...range.curves, s })
  const setLCurve = l      => setCurves({ ...range.curves, l })

  // set hue curve
  const setHMin        = min        => setHCurve({ ...range.curves.h, min })
  const setHMax        = max        => setHCurve({ ...range.curves.h, max })
  const setHMinControl = minControl => setHCurve({ ...range.curves.h, minControl })
  const setHMaxControl = maxControl => setHCurve({ ...range.curves.h, maxControl })

  // set saturation curve
  const setSMin        = min        => setSCurve({ ...range.curves.s, min })
  const setSMax        = max        => setSCurve({ ...range.curves.s, max })
  const setSMinControl = minControl => setSCurve({ ...range.curves.s, minControl })
  const setSMaxControl = maxControl => setSCurve({ ...range.curves.s, maxControl })

  // set lightness curve
  const setLMin        = min        => setLCurve({ ...range.curves.l, min })
  const setLMax        = max        => setLCurve({ ...range.curves.l, max })
  const setLMinControl = minControl => setLCurve({ ...range.curves.l, minControl })
  const setLMaxControl = maxControl => setLCurve({ ...range.curves.l, maxControl })

  // reset curves
  const resetHCurve = () => setHCurve(palette.ranges[range.uri].curves.h)
  const resetSCurve = () => setSCurve(palette.ranges[range.uri].curves.s)
  const resetLCurve = () => setLCurve(palette.ranges[range.uri].curves.l)
  const resetCurves = () => setCurves(palette.ranges[range.uri].curves)

  // calculate h/s/l stop values from a curve
  const hAtStop   = stop => hStopValueFromRange(stop, range)
  const sAtStop   = stop => sStopValueFromRange(stop, range)
  const lAtStop   = stop => lStopValueFromRange(stop, range)
  const hslAtStop = stop => hslAtStopFromRange(stop, range)

  // update stop value calculated from curve
  const curveToStops = item => setStops(
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

  // update h/s/l stops calculated from respective curves
  const hCurveToStops = () => curveToStops('h')
  const sCurveToStops = () => curveToStops('s')
  const lCurveToStops = () => curveToStops('l')

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

  return render({
    // options
    options,
    toggleNames,
    toggleInfo,
    toggleGrey,
    toggleShow5s,
    toggleStops,
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
    // curves
    setHMin, setHMax, setHMinControl, setHMaxControl,
    setSMin, setSMax, setSMinControl, setSMaxControl,
    setLMin, setLMax, setLMinControl, setLMaxControl,
    resetCurves, resetHCurve, resetSCurve, resetLCurve,
    // stops
    setHStop, setSStop, setLStop,
    lockStop, unlockStop, toggleLock,
    resetStops, resetHStops, resetSStops, resetLStops,
    hAtStop, sAtStop, lAtStop, hslAtStop,
    hCurveToStops, sCurveToStops, lCurveToStops,
    curvesToStops, curvesToStop
  })
}

const generated = Generator(Context)
export const { Provider: PalettesProvider, Consumer, Use: usePalettes } = generated
export default generated