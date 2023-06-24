import React from 'react'
import Example from './Example.jsx'

const Table = () =>
  <Example title="Table">
    <table>
      <thead>
        <tr>
          <th>Head 1</th>
          <th>Head 2</th>
          <th>Head 3</th>
        </tr>
      </thead>
      <tbody>
        <TableRow n={1}/>
        <TableRow n={2}/>
        <TableRow n={3}/>
        <TableRow n={4}/>
      </tbody>
    </table>
  </Example>

const TableRow = ({n}) =>
  <tr>
    <td>Cell {n},1</td>
    <td>Cell {n},2</td>
    <td>Cell {n},3</td>
  </tr>

export default Table