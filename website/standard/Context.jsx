import { Generator } from '@abw/react-context'
import { usePalettes } from '../palettes/Context.jsx'

const Context = ({palette, render}) => {
  const { options } = usePalettes()
  return render({ palette, options })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: usePalette } = generated
export default generated