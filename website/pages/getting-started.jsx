import React      from 'react'
import CodeBlock  from '@/site/CodeBlock.jsx'
import add        from '@/snippets/install/add?raw'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <h2>Installation</h2>
    <p>
      Add the <code className="code">@abw/badger-color</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock
      code={add}
      caption="Installing"
      language="shell"
      className="mar-b-8"
      expand
    />
  </div>

export default GettingStarted