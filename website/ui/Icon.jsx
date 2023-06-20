import React from 'react'
import Icons from './Icons.jsx'
import { fail, isString } from '@abw/badger-utils'

export const iconPath = name => Icons[name]
  || fail(`Invalid icon name: ${name}`)

export const iconData = name => {
  const data = Icons[name]
    || fail(`Invalid icon name: ${name}`)
  return isString(data)
    ? {
        path: data,
        width: 512,
        height: 512
      }
    : data
}

export const IconSVG = ({
  path,
  onClick,
  width=512,
  height=512,
  style,
  className='',
  fill='currentColor'
}) =>
  <svg
    aria-hidden="true" focusable="false"
    className={`${className} icon`} style={style}
    role="img" xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width} ${height}`}
    onClick={onClick}
  >
    <path d={path} fill={fill}/>
  </svg>

export const Icon = ({ name, ...props }) =>
  name
    ? <IconSVG {...props} {...iconData(name)}/>
    : <IconSVG {...props}/>


export default Icon