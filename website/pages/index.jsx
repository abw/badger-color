import React from 'react'
import { ReactComponent as Badger } from '../svg/badger-color.svg'
import { ReactComponent as UK } from '../svg/uk.svg'
import { ReactComponent as Canada } from '../svg/canada.svg'
import { ReactComponent as Australia } from '../svg/australia.svg'
import NotYet from '../help/NotYet.jsx'

const Index = () =>
  <div>
    <div className="mobile block-center mar-t-8">
      <Badger/>
      <p className="intro mar-t-8">
        Badger-Color is set of tools for creating colors and color palettes.
      </p>
      <p>
        Click on one of the &quot;Standard Palettes&quot; in the sidebar to
        get started. Or you can click on the green plus button at the top to
        create a new palette of your own.
      </p>
      <p>
        Look out for this button to get help:
        <NotYet className="smallish mar-l-2"/>
      </p>
      <h2>Terminology <span className="small">(as used here)</span></h2>
      <p>
      </p>
      <p>
        A <i>palette</i> is a collection of color <i>ranges</i>.
      </p>
      <p>
        A <i>range</i> is a collection of <i>colors</i> that usually share the
        same or similar hues.
      </p>
      <p>
        Each color in the range is identified by a <i>stop</i> number.  In
        this system they range from 0 (darkest) to 100 (lightest).
      </p>
      <p>
        Stop 0 is the <i>black point</i> for a color range.  If you
        subscribe to the philosophy that it&apos;s generally best not to use
        pure black or white in a design except in exceptional cases, then
        this is supposed to be the color that you can use instead of black.
      </p>
      <p>
        Stop 100 is the <i>white point</i> for a color range, being the
        color that you can use instead of white, if the above applies.
      </p>
      <p>
        You don&apos;t have to use them like that.  You can create any kind
        of color palettes you like.
      </p>
      <p>
        Colors are defined (in this system at least) using the HSL color space.{' '}
        <i>H</i> is for <i>Hue</i>, <i>S</i> is for <i>Saturation</i> and{' '}
        <i>L</i> is for <i>Lightness</i>.  This system is not perfect, but
        it&apos;s the best compromise (for now at least) that allows you to
        define colors in a reasonably intuitive way.
      </p>
      <div className="apology">
        <div className="flags">
          <UK/>
          <Australia/>
          <Canada/>
        </div>
        <div className="text">
          {/* <h2>Sorry Colo<b>u</b>r Fans</h2> */}
          <h2>Typos Intentional</h2>
          <p>
            Let me take this opportunity to apologise to my fellow Brits
            and other chums from Australia, Canada, and anywhere else where they
            know how to spell <i>colour</i> properly.
          </p>
          <p>
            The sad fact of the matter is that the word is spelled
            incorrectly as <i>color</i> in CSS and other related web
            technologies.  If you&apos;re a web developer or designer
            then I&apos;m afraid you just have to learn to live with it.
          </p>
        </div>
      </div>
    </div>
  </div>

export default Index
