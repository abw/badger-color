import { hasValue } from '@abw/badger-utils'

export function testClasses(tests, ...more) {
  let classes = Object.entries(tests).reduce(
    (classes, [key, value]) => {
      if (value) {
        classes.push(key)
      }
      return classes
    },
    [ ]
  )
  if (more) {
    classes.push(
      ...more.filter( i => hasValue(i) && i.length )
    )
  }
  return classes.join(' ')
}

export default testClasses
