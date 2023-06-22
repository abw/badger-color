import { setHex } from './color.js'

const V1_SIGNATURE = 'badger-color-v1'

export function base64CompressedPalette(palette) {
  return btoa(
    JSON.stringify(compressPalette(palette))
  )
}

export function compressPalette(palette) {
  return [
    V1_SIGNATURE,
    palette.name,
    palette.comment ?? '',
    palette.source  ?? '',
    compressRanges(palette.ranges),
  ]
}

export function compressRanges(ranges) {
  return Object.values(ranges).reduce(
    (ranges, range) => {
      ranges.push(compressRange(range))
      return ranges
    },
    [ ]
  )
}

export function compressRange(range) {
  return [
    range.name,
    compressStops(range.stops),
    compressCurves(range.curves)
  ]
}

export function compressStops(stops) {
  return Object.entries(stops).reduce(
    (stops, [stop, color]) => {
      stops.push([ stop, color.h, color.s, color.l, color.locked ? 1 : 0])
      return stops
    },
    [ ]
  )
}
export function compressCurves(curves) {
  return ['h', 's', 'l'].map(
    item => compressCurve(curves[item])
  )
}

export function compressCurve(curve) {
  return [
    curve.min, curve.minControl.x, curve.minControl.y,
    curve.max, curve.maxControl.x, curve.maxControl.y,
  ]
}

export function decompressBase64Palette(base64) {
  return decompressPalette(
    JSON.parse(
      atob(base64)
    )
  )
}

export function decompressPalette(palette) {
  const [ sig, name, comment, source, ranges ] = palette
  if (sig != V1_SIGNATURE) {
    throw 'Compressed palette is not from badger-color version 1'
  }
  return {
    name,
    comment,
    source,
    ranges: decompressRanges(ranges)
  }
}

export function decompressRanges(ranges) {
  return ranges.reduce(
    (ranges, data) => {
      const range = decompressRange(data)
      ranges[range.name] = range
      return ranges
    },
    { }
  )
}

export function decompressRange(range) {
  const [name, stops, curves] = range
  return {
    name,
    stops: decompressStops(stops),
    curves: decompressCurves(curves),
  }
}

export function decompressStops(stops) {
  return stops.reduce(
    (stops, data) => {
      const [stop, h, s, l, locked] = data
      stops[stop] = setHex({ h, s, l })
      if (locked) {
        stops[stop].locked = true
      }
      return stops
    },
    { }
  )
}

export function decompressCurves(curves) {
  const [h, s, l] = curves.map(
    curve => decompressCurve(curve)
  )
  return { h, s, l }
}

export function decompressCurve(curve) {
  const [min, minx, miny, max, maxx, maxy] = curve
  return {
    min,
    minControl: { x: minx, y: miny },
    max,
    maxControl: { x: maxx, y: maxy },
  }
}
