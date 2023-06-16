import React from 'react'

const Index = () =>
  <div className="page">
    <h1>Styles</h1>
    <p>
      Badger-UI uses a combination of techniques to achieve flexibility,
      modularity and utility.
    </p>
    <h2>Utility Classes</h2>
    <p>
      CSS utility classes are useful for applying styles to elements on an
      ad-hoc basis.
    </p>
    <p>
      Some CSS frameworks, most notably{' '}
      <a href="https://tailwindcss.com/">tailwind.css</a>, have taken this to
      the extreme where everything is a utility class and you never need to
      write any CSS at all. Although this approach has some merits for
      rapid prototyping, I personally wouldn&apos;t use it when building a
      non-trivial site because I think that it can have a negative impact on
      readability and maintainability.
    </p>
    <p>
      I prefer to take the pragmatic approach and use utility classes to
      apply <i>exceptional</i> styling to elements that don&apos;t warrant
      having their own dedicated CSS classes.  The general rule that I follow
      is to create dedicated CSS classes for components that I&apos;m using
      in different places in a site.  For example, a product card, a user
      avatar, button and form styling, and so.  This ensures that they are
      consistent and can easily be changed across the whole site by updating
      the rules in the stylesheet.
    </p>
    <p>
      For styling that depends on the context in which an element is being
      used, I&apos;ll generally reach for utility classes. By far the most
      useful of these, and the ones that I use more than any other, are
      the <code>mar</code> and <code>pad</code> utility classes to add custom
      margins and padding.  The amount of margin or padding required on an
      element will often depend on the other elements around it, so there
      isn&apos;t a &quot;one size fits all&quot; solution.
      Other useful utility classes include those to set the font size, add a
      border or drop shadow, or to set the layout to use flexbox or grid.
    </p>

    <h2>CSS Custom Properties</h2>
    <p>
      CSS custom properties or CSS variables as they are also know, are an
      incredibly powerful addition to the toolkit for any web designer or
      developer.  They allow you to define reusable &quot;snippets&quot; of
      CSS that can easily be applied to different elements.  They can be used
      to replace much of the functionality that was previously only accessible
      by using variables and/or mixins in a CSS pre-processing language like{' '}
      <a href="https://sass-lang.com/">SASS</a>.
    </p>

    <h2>SASS Variables</h2>
    <p>
      Although CSS custom properties have largely removed the need for
      CSS pre-processors like SASS, there are still benefits to be had from
      using them.  One benefit is that they can help to reduce bloat in your
      CSS files.  SASS allows you to define variables that can be used to
      implement system-wide configuration options that are then compiled into
      the generated CSS files.  In contrast, any CSS custom properties that
      you use must be included in the CSS and, if overdone, can lead to
      significant increases in the file size.
    </p>

    <h2>When to Use Each?</h2>
    <p>
      The general rule that I follow is to use SASS variables for configuration
      options that I might want to change on a site-wide basis but generally
      remain constant throughout the site.  For example, the default font
      face, the breakpoints, the colors or default spacing units.  It&apos;s
      useful to have these defined as variables because it allows me to plug
      Badger-UI into a project, tweak the default settings, and then get
      coding.  If at some point in the future I decide they&apos;re not quite
      right, or if the client or a designer wants me to change them, then it
      should be easy to do so, and they should be applied universally.
    </p>
    <p>
      For styles that I might want to change in different parts of the site,
      need to reflect some application state (e.g. the differences between
      a success, warning or error message), or that should have different
      properties depending on the user selecting a light or dark theme, then
      CSS properties are generally the way to go.
    </p>
    <p>
      For styles that need to be applied on an ad-hoc basis, utility classes
      are what I reach for.
    </p>
  </div>

export default Index

/*
    </p>
    <p>
      When you realise how useful utility classes can be you may be tempted
      to add more and more, are so great then
      why not make everything a utility classes?
*/
