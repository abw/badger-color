import React from 'react'

const Checkbox = ({label, checked, toggle, className=''}) =>
  <label className={`checkbox ${className}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={toggle}
    />
    {label}
  </label>

export default Checkbox