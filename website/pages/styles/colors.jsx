import React              from 'react'
import CodeBlock          from '@/site/CodeBlock.jsx'
import hues               from '@/snippets/sass/color-hues.scss?raw'
import classes            from './colors.module.scss'
import { colors, stops }  from '@/site/config/colors.js'

const Colors = () =>
  <>
    <h1>Colors</h1>
    <p>
      The following colors are defined.
    </p>
    { colors.map(
      color =>
        <div className={classes.swatches} key={color}>
          { stops.map(
            stop =>
              <div
                className={classes.swatch}
                key={stop}
                style={{
                  color: stop > 50 ? 'black' : 'white',
                  backgroundColor: `var(--${color}-${stop})`
                }}
              >
                {color}-{stop}<br/>
              </div>
          )}
        </div>
    )}
    <h2>Color Variables</h2>
    <p>
      The color names are <code>red</code>, <code>brown</code>,{' '}
      <code>orange</code>, <code>yellow</code>, <code>olive</code>,{' '}
      <code>green</code>, <code>blue</code>, <code>indigo</code>,{' '}
      <code>violet</code>, <code>purple</code> and <code>pink</code>.
      The <code>$color-names</code> SASS variable is defined as a list of
      these color names.
    </p>
    <p>
      The color stops are <code>0</code> (very close to black) ranging to{' '}
      <code>100</code> (very close to white) in increments of 10.  The{' '}
      <code>$color-stops</code> SASS variable is defined as a list of these
      color stops.
    </p>
    <p>
      Each of the colours show above has a corresponding SCSS variable composed
      of the color name and stop delimited by a hyphen, e.g.{' '}
      <code>$red-0</code> through to <code>$grey-100</code>.  They are also
      defined as CSS custom properties, e.g. <code>--red-0</code> through
      to <code>--grey-100</code>.
    </p>
    <p>
      Each range of colors is built from a base hue.  These are defined in
      SASS variables using the SASS <code>!default</code> flag.  If you want
      to adjust the hues you can set any of these SASS variables
      before importing the main <code>badger-ui.scss</code> component.
    </p>
    <CodeBlock
      code={hues}
      caption="Customising Hues"
      language='scss'
      expand
    />

    <h2>Brand Color</h2>
    <p>
      TODO
    </p>
  </>

export default Colors
