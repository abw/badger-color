import { useState } from 'react'
import { Generator } from '@abw/react-context'
import { usePalette } from '../palette/Context.jsx'
import { bezier, bezierInverse } from '../../lib/utils/bezier.js'
import { setHex } from '../../lib/utils/color.js'

const Context = ({render}) => {
  const { palette, saveRange, editingRange: name } = usePalette()
  const [range, setRange] = useState(palette.ranges[name])
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const toggleOpen = () => setOpen(! open)
  const toggleEditing = () => setEditing(! editing)

  const reset = () => setRange(palette.ranges[name])
  const save  = () => saveRange(range)

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

  // function to reset curves
  const resetHCurve = () => setHCurve(palette.ranges[name].curves.h)
  const resetSCurve = () => setSCurve(palette.ranges[name].curves.s)
  const resetLCurve = () => setLCurve(palette.ranges[name].curves.l)
  const resetCurves = () => setCurves(palette.ranges[name].curves)

  // functions to update stops
  const setStops   = stops => setRange( range => ({ ...range, stops }) )
  const setStop    = (stop, color) => setStops({ ...range.stops, [stop]: setHex(color) })
  const setHStop   = (stop, h) => setStop(stop, { ...range.stops[stop], h })
  const setSStop   = (stop, s) => setStop(stop, { ...range.stops[stop], s })
  const setLStop   = (stop, l) => setStop(stop, { ...range.stops[stop], l })
  const lockStop   = stop => setStop(stop, { ...range.stops[stop], locked: true  })
  const unlockStop = stop => setStop(stop, { ...range.stops[stop], locked: false })
  const toggleLock = stop => range.stops[stop].locked ? unlockStop(stop) : lockStop(stop)

  // reset stops to their original h/s/l
  const resetStops = item => setStops(
    Object.entries(range.stops).reduce(
      (stops, [stop, color]) => {
        stops[stop] = setHex({
          ...color,
          [item]: palette.ranges[name].stops[stop][item]
        })
        return stops
      },
      { }
    )
  )
  const resetHStops = () => resetStops('h')
  const resetSStops = () => resetStops('s')
  const resetLStops = () => resetStops('l')

  // functions to determine values at stops from a curve
  const atStop = (stop, curve) =>
    Math.round(
      bezier(
        bezierInverse(stop, 0, curve.minControl.x, curve.maxControl.x, 100),
        curve.min, curve.minControl.y, curve.maxControl.y, curve.max
      )
    )
  const hAtStop   = stop => atStop(stop, range.curves.h)
  const sAtStop   = stop => atStop(stop, range.curves.s)
  const lAtStop   = stop => atStop(stop, range.curves.l)
  const hslAtStop = stop => setHex({
    h: hAtStop(stop),
    s: sAtStop(stop),
    l: lAtStop(stop),
  })

  // function to update stops computed from curve
  const curveToStops = item => setStops(
    Object.entries(range.stops).reduce(
      (stops, [stop, color]) => {
        stops[stop] = color.locked
          ? color
          : setHex({
            ...color,
            [item]: atStop(stop, range.curves[item])
          })
        return stops
      },
      { }
    )
  )
  const curvesToStops = () => setStops(
    Object.entries(range.stops).reduce(
      (stops, [stop, color]) => {
        stops[stop] = color.locked
          ? color
          : setHex( hslAtStop(stop) )
        return stops
      },
      { }
    )
  )
  const hCurveToStops = () => curveToStops('h')
  const sCurveToStops = () => curveToStops('s')
  const lCurveToStops = () => curveToStops('l')

  // copy a single stop from the curve to stops
  const curvesToStop = stop => setStop(
    stop,
    setHex( hslAtStop(stop) )
  )

  return render({
    range, setRange,
    open, setOpen,
    editing, setEditing,
    toggleOpen, toggleEditing,
    reset, save,
    setHMin, setHMax, setHMinControl, setHMaxControl,
    setSMin, setSMax, setSMinControl, setSMaxControl,
    setLMin, setLMax, setLMinControl, setLMaxControl,
    resetHCurve, resetSCurve, resetLCurve,
    setHStop, setSStop, setLStop,
    lockStop, unlockStop, toggleLock,
    resetHStops, resetSStops, resetLStops,
    hAtStop, sAtStop, lAtStop, hslAtStop,
    hCurveToStops, sCurveToStops, lCurveToStops,
    curvesToStops, curvesToStop
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: useRange } = generated
export default generated