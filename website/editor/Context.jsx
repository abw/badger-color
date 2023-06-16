import React, { useState } from 'react'
import CurveEditor from '../bezier/CurveEditor.jsx'
import { bezier, bezierInverse } from '../utils/curves.js'
import Swatches from '../editor/Swatches.jsx'
// import StopGap from '../editor/StopGap.jsx'

const RangeEditor = ({range, toggleEditing, render, options={}}) => {
  const { h, s, l } = range.curves

  // hue
  const [hMin, setHMin] = useState(h.min)
  const [hMax, setHMax] = useState(h.max)
  const [hControl1, setHControl1] = useState(h.minControl)
  const [hControl2, setHControl2] = useState(h.maxControl)

  // saturation
  const [sMin, setSMin] = useState(s.min)
  const [sMax, setSMax] = useState(s.max)
  const [sControl1, setSControl1] = useState(s.minControl)
  const [sControl2, setSControl2] = useState(s.maxControl)

  // lightness
  const [lMin, setLMin] = useState(l.min)
  const [lMax, setLMax] = useState(l.max)
  const [lControl1, setLControl1] = useState(l.minControl)
  const [lControl2, setLControl2] = useState(l.maxControl)

  // stops
  const [stops, setStops] = useState(range.stops)

  return render({
    hMin, setHMin,
    hMax, setHMax,
    hControl1, setHControl1,
    hControl2, setHControl2,
    sMin, setSMin,
    sMax, setSMax,
    sControl1, setSControl1,
    sControl2, setSControl2,
    lMin, setLMin,
    lMax, setLMax,
    lControl1, setLControl1,
    lControl2, setLControl2,
    stops, setStops,
  })
}