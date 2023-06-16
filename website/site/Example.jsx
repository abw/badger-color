import React from 'react'
import CodeBlock from './CodeBlock.jsx'

export const Example = ({
  Component,
  code,
  children,
  className='',
  caption,
  fixed,
  expand
}) => {
  return (
    <div className={`example grid-2 gap-4 stack-desktop ${className}`}>
      <div className="source">
        <CodeBlock
          caption={caption}
          code={code}
          expand={expand}
          fixed={fixed}
        />
      </div>
      { Boolean(children) &&
        <div className="interim">
          {children}
        </div>
      }
      { Component
        ? <div className="output">
            <h4 className="caption">Output</h4>
            <Component/>
          </div>
        : null
      }
    </div>
  )
}


export default Example
