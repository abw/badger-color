export function nameToURI(name) {
  return name.replaceAll(/\W+/g, '-').toLowerCase()
}

export function newName(existing={ }, options={ }) {
  const prefix = options.prefix || 'Palette'
  let n = 1
  while (n < 100) {
    const name = `${prefix} #${n}`
    if (! existing[nameToURI(name)]) {
      return name
    }
    n++
  }
  throw `No more ${prefix}-NN names available`
}
