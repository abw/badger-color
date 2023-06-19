import React from 'react'
import { Consumer } from '../../palettes/Context.jsx'
import Name from '../../palette/Name.jsx'
import Delete from '../../palette/Delete.jsx'
import Link from '../../site/Link.jsx'

const Home = () =>
  <div>
    <div className="flex space start">
      <Name/>
      <Delete/>
    </div>
    <h1>Home</h1>
    <Link to="edit" text="Edit"/>
  </div>

export default Consumer(Home)