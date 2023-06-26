export function nameToURI(name) {
  return name.replaceAll(/\W+/g, '-').toLowerCase()
}

export function namesToAliases(name) {
  return name.replaceAll(/[^\w\s]+/g, '-').toLowerCase()
}

export function newName(existing={ }, options={ }) {
  let prefix = options.prefix || 'Palette'
  let n = 1

  // handle the case where we've got an existing name like 'Palette #3'
  // and we want to create 'Palette #4' instead of 'Palette #3 #1'
  const match = prefix.match(/^(.+?)\s*#(\d+)+$/)
  if (match) {
    prefix = match[1]
    n = parseInt(match[2])
  }
  while (n < 100) {
    const name = `${prefix} #${n}`
    if (! existing[nameToURI(name)]) {
      return name
    }
    n++
  }
  throw `No more ${prefix}-NN names available`
}
