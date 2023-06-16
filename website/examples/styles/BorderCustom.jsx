import React from 'react'

const customBorderStyle = {
  '--border-width':  '3px',
  '--border-color':  'var(--red-50)',
  '--border-radius': '10px',
}

const CustomBorder = () =>
  <div style={customBorderStyle}>
    <div className="border pad-4 mar-b-4">
      This element has a wide red border.
    </div>
    <div className="border pad-4 mar-b-4">
      So does this.
    </div>
    <div className="border pad-4 mar-b-4">
      This too.
    </div>
  </div>

export default CustomBorder
