import React from 'react'
import Link from '../Link.jsx'
import { URLS } from '../URLS.jsx'
import { hslToCSS } from '../../../lib/utils/color.js'

const Range = ({
  range,
  palette
}) =>
  <Link
    to={URLS.palette.range(palette.uri, range.uri)}
    className="item"
    style={{
      '--active-light-background': hslToCSS(range.stops[70]),
      '--active-dark-background': hslToCSS(range.stops[30]),
      '--swatch-background': hslToCSS(range.stops[50])
    }}
  >
    <div className="swatch"/>
    {range.name}
  </Link>

export default Range
