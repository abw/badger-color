import { useState } from 'react'
import { Generator } from '@abw/react-context'
import { bezier, bezierInverse } from '../utils/curves.js'

const Context = ({range, toggleEditing, options={}, render}) => {
  const { h, s, l } = range.curves

  // stops
  const [stops, setStops] = useState(range.stops)
  const setStop  = (stop, color) => setStops( stops => ({ ...stops, [stop]: color }) )
  const setStopH = (stop, h) => setStop(stop, { ...stops[stop], h })
  const setStopS = (stop, s) => setStop(stop, { ...stops[stop], s })
  const setStopL = (stop, l) => setStop(stop, { ...stops[stop], l })
  const stopGap = options.split5 ? 5 : 10
  const atStop = (stop, min, control1, control2, max) =>
    Math.round(
      bezier(
        bezierInverse(stop, 0, control1.x, control2.x, 100),
        min, control1.y, control2.y, max
      )
    )

  // determine h/s/l at a stop from the relevant curve
  const hAtStop   = stop => atStop(stop, hMin, hControl1, hControl2, hMax)
  const sAtStop   = stop => atStop(stop, sMin, sControl1, sControl2, sMax)
  const lAtStop   = stop => atStop(stop, lMin, lControl1, lControl2, lMax)
  const hslAtStop = stop => ({
    h: hAtStop(stop),
    s: sAtStop(stop),
    l: lAtStop(stop),
  })

  // reset stops to their original h/s/l
  const resetStops = (item, setter) => Object
    .entries(range.stops)
    .forEach(
      ([stop, color]) => setter(stop, color[item])
    )
  const hResetStops = () => resetStops('h', setStopH)
  const sResetStops = () => resetStops('s', setStopS)
  const lResetStops = () => resetStops('l', setStopL)

  // update stops from h/s/l computed from curve
  const curveToStops = (getter, setter) => Object
    .entries(range.stops)
    .forEach(
      ([stop]) => {
        setter(stop, getter(stop))
      }
    )
  const hCurveToStops = () => curveToStops(hAtStop, setStopH)
  const sCurveToStops = () => curveToStops(sAtStop, setStopS)
  const lCurveToStops = () => curveToStops(lAtStop, setStopL)

  // hue
  const [hMin, setHMin] = useState(h.min)
  const [hMax, setHMax] = useState(h.max)
  const [hControl1, setHControl1] = useState(h.minControl)
  const [hControl2, setHControl2] = useState(h.maxControl)
  const hResetCurve = () => {
    setHMin(h.min)
    setHMax(h.max)
    setHControl1(h.minControl)
    setHControl2(h.maxControl)
  }

  // saturation
  const [sMin, setSMin] = useState(s.min)
  const [sMax, setSMax] = useState(s.max)
  const [sControl1, setSControl1] = useState(s.minControl)
  const [sControl2, setSControl2] = useState(s.maxControl)
  const sResetCurve = () => {
    setSMin(s.min)
    setSMax(s.max)
    setSControl1(s.minControl)
    setSControl2(s.maxControl)
  }

  // lightness
  const [lMin, setLMin] = useState(l.min)
  const [lMax, setLMax] = useState(l.max)
  const [lControl1, setLControl1] = useState(l.minControl)
  const [lControl2, setLControl2] = useState(l.maxControl)
  const lResetCurve = () => {
    setLMin(l.min)
    setLMax(l.max)
    setLControl1(l.minControl)
    setLControl2(l.maxControl)
  }

  return render({
    hMin, setHMin,
    hMax, setHMax,
    hControl1, setHControl1,
    hControl2, setHControl2,
    hResetCurve, hResetStops,
    hCurveToStops,
    sMin, setSMin,
    sMax, setSMax,
    sControl1, setSControl1,
    sControl2, setSControl2,
    sResetCurve, sResetStops,
    sCurveToStops,
    lMin, setLMin,
    lMax, setLMax,
    lControl1, setLControl1,
    lControl2, setLControl2,
    lResetCurve, lResetStops,
    lCurveToStops,
    stops, setStops,
    setStopH, setStopS, setStopL,
    stopGap, hslAtStop,
    toggleEditing,
    options,
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: useEditor } = generated
export default generated