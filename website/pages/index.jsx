import React from 'react'
import { ReactComponent as Badger } from '../svg/badger-color.svg'
import { ReactComponent as UK } from '../svg/uk.svg'
import { ReactComponent as Canada } from '../svg/canada.svg'
import { ReactComponent as Australia } from '../svg/australia.svg'
import Theme from '../site/Theme.jsx'
import ButtonHelp from '../help/ButtonHelp.jsx'

const Index = () =>
  <div>
    <div className="mobile block-center mar-t-8">
      <Badger/>
      <p className="intro mar-t-8">
        Badger-Color is set of tools for creating colors and color palettes.
      </p>
      <h2>Getting Started</h2>
      <p>
        Click on one of the <b>Standard Palettes</b> in the sidebar to
        get started.  In the top right hand corner you&apos;ll see a number
        of control buttons.
      </p>
      <ButtonHelp
        color={Theme.colors.clone}
        icon="clone"
        text="Clone the palette to make a working copy."
      />
      <ButtonHelp
        color={Theme.colors.examples}
        icon="eye"
        text="View some examples of UI components using this palette."
      />
      <ButtonHelp
        color={Theme.colors.clipboard}
        icon="clipboard"
        text="Copy the JSON data for the palette to the clipboard."
      />
      <ButtonHelp
        color={Theme.colors.download}
        icon="download"
        text="Download the JSON data as a file."
      />
      <ButtonHelp
        color={Theme.colors.help}
        icon="info"
        text="Help, in case you forget what these buttons do."
      />
      <h2>Cloning a Standard Palette</h2>
      <p>
        Click on the yellow <b>clone</b> button to clone a standard palette.
        This will give you a working copy of the palette that you can edit.
        It will then appear in the <b>My Palettes</b> menu in the sidebar.
      </p>
      <p>
        You then get two new buttons to play with.
      </p>
      <ButtonHelp
        color={Theme.colors.delete}
        icon="trash"
        text="Delete the palette.  We'll ask you for confirmation first."
      />
      <ButtonHelp
        color={Theme.colors.edit}
        icon="pen"
        text="Edit the palette metadata."
      />
      <h2>Create a New Palette</h2>
      <p>
        Instead of cloning an existing palette you can create a new empty
        palette by clicking the green <b>plus</b> button at the top of the{' '}
        <b>My Palettes</b> menu in the sidebar.
      </p>
      <ButtonHelp
        color={Theme.colors.add}
        icon="plus"
        text="Create a new palette."
      />
      <h2>Palette Options</h2>
      <p>
        The <b>Options</b> menu at the bottom of the sidebar contains a
        number of options for changing what is displayed.
      </p>
      <ul>
        <li>
          <b>Range Names</b> - display the name of each color range.
        </li>
        <li>
          <b>Swatch Info</b> - display information about each color swatch,
          including the stop number, RGB hex, and H/S/L values.
        </li>
        <li>
          <b>5 Stops</b> - the color range is divided into 11 stops: 0, 10,
          20, 30, etc., up to 100.  Select this option to show
          additional stops in between: 5, 15, 25, and so on.
        </li>
        <li>
          <b>Black &amp; White</b> - select this to show pure black and white
          swatches at either end of the color range.
        </li>
        <li>
          <b>Greyscale</b> - show the colors as shades of grey corresponding
          to the luminance of each color.  This is useful to get a feel for
          how bright or dark your colors are.
        </li>
      </ul>
      <h2>Editing a Color Range</h2>
      <p>
        Once you&apos;ve got a working palette, either by cloning an existing
        palette or create a new one, you can start editing or adding new color
        ranges.  Click on one of the color ranges listed in the{' '}
        <b>Ranges</b> menu in the sidebar to edit it.  You&apos;ll also see
        a green <b>plus</b> button at the top of the <b>Ranges</b> menu for
        adding a new range.
      </p>
      <p>
        You get the same set of control buttons displayed when editing a range.
        They perform the same functionality except that this time they&apos;re
        working on the color range rather than the whole palette.
      </p>
      <p>
        You&apos;ll see not one, but three sets of color swatches.  The
        first set shows the <b>Current</b> colors in the range.  The
        second set shows the working <b>Stops</b> that you can edit
        individually by dragging the stop points in the graphs (more on that
        shortly). The third set shows the stops calculated from Bézier curves
        (more on that shortly, too).
      </p>
      <p>
        The swatches for the <b>Stops</b> and <b>Curves</b> have two control
        buttons.
      </p>
      <ButtonHelp
        color={Theme.colors.undo}
        icon="undo"
        text="Reset the stops or curve from the current range."
      />
      <ButtonHelp
        color={Theme.colors.commit}
        icon="arrow-up"
        text="Copy the range of colors to the set above."
      />
      <p>
        A typical workflow is to edit the curves (yes, we&apos;re getting to
        that in just a minute), copy the curves to the stops, making any
        adjustments to the stops, and then copy the curves to the current
        palette range.  So the direction of data flow is essentially upwards,
        working from the bottom to the top.
      </p>
      <h2>H/S/L Graphs</h2>
      <p>
        OK, now it&apos;s time to talk about the graphs and how you edit them.
        There are three graphs displayed that showing the hue, saturation and
        lightness values for the entire range.
      </p>
      <p>
        Each graph has a <b>curve</b>, show in blue, with 4 control points
        that you can drag to move: one at the start (the minimum value for
        stop 0), one at the end (the maximum value for stop 100) and two
        intermediate points that affect the shape of the curve.  Dragging
        these points will change the values displayed in the <b>Curves</b>{' '}
        swatches.  You can also use the form input beneath the graph to adjust
        the control points for the curve.
      </p>
      <p>
        Each graph also has points showing the values for each of the color
        stops. These are shown in red and can be dragged to changed values
        for individual color stops.
      </p>
      <p>
        There are buttons underneath the graph to reset the curve and/or stops
        to their original (current) values.  There&apos;s also a green button
        to set the stops from the curve.
      </p>
      <p>
        There are two other draggable controllers on the graph.  On the right
        side there is an orange <b>master</b> control which you can drag to
        move the whole curve up or down.  On the bottom there&apos;s a
        violet <b>inspector</b>control which you can drag left and right to
        inspect different points on the curve.
      </p>
      <p>
        Above each graph there are three checkboxes.  The first can be used
        to show or hide the curve.  The second is to show or hide the stops.
        The third controls how the <b>inspector</b> control functions.
        When <b>Snap</b> is enabled, the control will snap to units of
        10 (or 5 if you&apos;ve got the <b>5 Stops</b> palette option enabled).
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
