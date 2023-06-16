#!/usr/bin/env node
import { bin } from '@abw/badger-filesystem'

const hues = {
  red:       0,
  brown:    15,
  orange:   25,
  yellow:   45,
  olive:    70,
  green:   120,
  teal:    165,
  blue:    200,
  indigo:  230,
  violet:  255,
  purple:  280,
  pink:    320,
}

const text  = await bin().file('colors.scss').read()
const lines = text.split('\n').filter( line => line.length )
const defs  = lines.reduce(
  (defs, line) => {
    const match = line.match(
      /\s*\$(\w+?)-(\d+):\s*hsl\(\$\S+\s*(\d+)%\s+(\d+)%/)
    if (! match) {
      throw `Failed to parse line: ${line}`
    }
    const [ , name, stop, sat, lig] = match
    console.log(`${name} - ${stop} s:${sat} l:${lig}`)
    const hue = defs[name] ||= {
      name,
      hue: hues[name],
      stops: { }
    }
    const s = parseInt(sat)
    const l = parseInt(lig)
    hue.stops[stop] = { s, l }
    return defs
  },
  { }
)

console.log(defs)

await bin().file('colors.json', { codec: 'auto' }).write(defs)