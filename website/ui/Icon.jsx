import React from 'react'
import Icons from './Icons.jsx'
import { fail } from '@abw/badger-utils'

export const iconPath = name => Icons[name]
  || fail(`Invalid icon name: ${name}`)

export const Icon = ({
  path,
  name,
  onClick,
  width=512,
  height=512,
  style,
  className='icon',
  fill='currentColor'
}) =>
  <svg
    aria-hidden="true" focusable="false"
    className={className} style={style}
    role="img" xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width} ${height}`}
    onClick={onClick}
  >
    <path d={path||iconPath(name)} fill={fill}/>
  </svg>

export default Icon