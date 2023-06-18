const PALETTE_APP = 'badger-color-palette-app'

function LocalStorage() {
  let store = {}
  return {
    clear: () => (store = {}),
    getItem: (key) => store[key],
    setItem: (key, value) => (store[key] = value),
    removeItem: (key) => delete store[key],
  }
}
export const Store =
  (typeof window !== 'undefined' && window.localStorage) || LocalStorage()

export function loadData(item, defvalue={ }) {
  const data = Store.getItem(item)
  return data
    ? JSON.parse(data)
    : defvalue
}

export function saveData(item, value) {
  Store.setItem(item, JSON.stringify(value))
}

export const loadPaletteApp = () =>
  loadData(PALETTE_APP, { })

export const savePaletteApp = app =>
  saveData(PALETTE_APP, app)

//export const savePaletteApp = (name, app) =>
//  saveData(PALETTES, { ...loadPalettes(), [name]: palette })

