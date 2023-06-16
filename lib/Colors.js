import { file } from '@abw/badger-filesystem'

export async function loadColors(filename) {
  const data   = await file(filename, { codec: 'auto' }).read()
  const colors = Object.entries(data).reduce(
    (colors, [name, color]) => {
      colors[name] = buildColorScheme(color)
      return colors
    },
    { }
  )
}

export async function buildColorScheme(color) {
  
}