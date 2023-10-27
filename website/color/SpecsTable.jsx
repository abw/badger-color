import React from 'react'

export const SpecsTable = ({
  color,
  className='grey specs shaded lined mar-none text-left'
}) =>
  <table className={className}>
    <tbody>
      <tr>
        <th>RGB</th>
        <td>{color.hex}</td>
      </tr>
      <tr>
        <th>Hue</th>
        <td>{color.h}&deg;</td>
      </tr>
      <tr>
        <th>Sat.</th>
        <td>{color.s}%</td>
      </tr>
      <tr>
        <th>Lig.</th>
        <td>{color.l}%</td>
      </tr>
    </tbody>
  </table>

export default SpecsTable