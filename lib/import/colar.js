// Map the colar color names to Tailwind format so we can use the existing
// Tailwind importing code to handle the rest
const mapstop = {
  0:  50,
  1:  100,
  2:  150,
  3:  200,
  4:  300,
  5:  400,
  6:  500,
  7:  600,
  8:  700,
  9:  800,
  10: 850,
  11: 900,
  12: 950,
}

export function convertColarColorsToTailwind(colors) {
  return colors.reduce(
    (ranges, { color, name }) => {
      const [hue, stop] = name.toLowerCase().split('-')
      const range = ranges[hue] ||= { }
      range[mapstop[stop]] = color
      return ranges
    },
    { }
  )
}