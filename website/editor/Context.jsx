import { useState, useRef } from 'react'
import { bezier, bezierInverse, clamper } from '../../lib/utils/index.js'
import { usePalettes } from '../palettes/Context.jsx'
import { Generator } from '@abw/react-context'

const clamp100 = clamper(0, 100)

const Context = ({
  title,
  curveName,
  scale=100,
  stopRadius=2,
  lockedRadius=1.8,
  endRadius=3,
  controlRadius=2.5,
  stopSelectRadius=2.5,
  masterRadius=2.5,
  render
}) => {
  const { range, options, controls } = usePalettes()
  const { stops, curves } = range
  const curve = curves[curveName]
  const { min, max, minControl, maxControl } = curve
  const {
    setMin, setMax, setMinControl, setMaxControl,
    resetCurve, resetStops, curveToStops,
    setStop, curveAtStop, modCurve
  } = controls[curveName]

  const yFactor = scale / 100
  const svgRef = useRef(null)
  const clampRange = clamper(0, scale)

  // options
  const [showCurve, setShowCurve] = useState(true)
  const [showStops, setShowStops] = useState(true)
  const [snap, setSnap] = useState(true)
  const toggleShowCurve = () => setShowCurve( showCurve => ! showCurve )
  const toggleShowStops = () => setShowStops( showStops => ! showStops )
  const toggleSnap      = () => setSnap( snap => ! snap )

  // functions to change min, max and controls points via form input
  const changeMin = n => setMin(clampRange(n))
  const changeMax = n => setMax(clampRange(n))
  const changeMinControlX = x => setMinControl({
    x: clamp100(x),
    y: minControl.y
  })
  const changeMinControlY = y => setMinControl({
    x: minControl.x,
    y: clampRange(y)
  })
  const changeMaxControlX = x => setMaxControl({
    x: clamp100(x),
    y: maxControl.y
  })
  const changeMaxControlY = y => setMaxControl({
    x: maxControl.x,
    y: clampRange(y)
  })

  // functions to change min, max and control points by dragging
  const moveMin = xy => {
    setMin(Math.round(xy.y * yFactor))
  }
  const moveMax = xy => {
    setMax(Math.round(xy.y * yFactor))
  }
  const moveMinControl = xy => {
    setMinControl({
      x: Math.round(xy.x),
      y: Math.round(xy.y * yFactor)
    })
  }
  const moveMaxControl = xy => {
    setMaxControl({
      x: Math.round(xy.x),
      y: Math.round(xy.y * yFactor)
    })
  }

  // master midpoint slider
  const mid = curveAtStop(50)
  const moveMid = xy => {
    const newMid = Math.round(xy.y * yFactor)
    const dy     = newMid - mid
    modCurve({
      min: clampRange(min + dy),
      max: clampRange(max + dy),
      minControl: { x: minControl.x, y: clampRange(minControl.y + dy) },
      maxControl: { x: maxControl.x, y: clampRange(maxControl.y + dy) },
    })
  }

  // functions to select a stop line by dragging
  const [stopX, setStopX] = useState(50)
  const stopTime = bezierInverse(stopX, 0, minControl.x, maxControl.x, 100)
  const stopY = bezier(stopTime, min, minControl.y, maxControl.y, max)

  return render({
    title,
    curveName,
    curve,
    stops,
    svgRef,
    yFactor,
    // options
    options,
    showCurve,
    showStops,
    snap,
    toggleShowCurve,
    toggleShowStops,
    toggleSnap,
    // curve control points
    min,
    changeMin,
    moveMin,
    max,
    changeMax,
    moveMax,
    minControl,
    changeMinControlX,
    changeMinControlY,
    moveMinControl,
    maxControl,
    changeMaxControlX,
    changeMaxControlY,
    moveMaxControl,
    mid,
    moveMid,
    // changeMid,
    // moveMid,
    // draggable stop line
    stopX,
    stopY,
    setStopX,
    // draggable stops
    setStop,
    // reset curve and stops
    resetCurve,
    resetStops,
    // copy curve to stops
    curveToStops,
    // display options
    stopRadius,
    lockedRadius,
    endRadius,
    controlRadius,
    stopSelectRadius,
    masterRadius
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: useEditor } = generated
export default generated

