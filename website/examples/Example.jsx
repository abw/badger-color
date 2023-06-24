import React from 'react'

const Example = ({title, children}) =>
  <div className="example">
    <h3>{title}</h3>
    {children}
  </div>

export default Example