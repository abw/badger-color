import { Generator } from '@abw/react-context'

const Context = ({palette, render}) => {
  return render({
    palette,
  })
}

const generated = Generator(Context)
export const { Provider, Consumer, Use: usePalette } = generated
export default generated