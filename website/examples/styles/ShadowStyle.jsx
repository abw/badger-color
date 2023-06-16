import React from 'react'

const customStyle = `
  .shadow-example {
    box-shadow: var(--shadow-2);
  }
`

const ShadowStyle = () =>
  <>
    <style>{customStyle}</style>
    <div className="shadow-example surface-4 pad-4">
      This element has the a box shadow applied
      using a CSS custom property.
    </div>
  </>

export default ShadowStyle
