import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'
import Name from '../palette/Name.jsx'
import Delete from '../palette/Delete.jsx'

const Edit = ({ palette, selectPalette }) => {
  const { uri } = useParams()

  useEffect(
    () => {
      selectPalette(uri)
    },
    [uri]
  )

  if (uri !== palette?.uri) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div>
      <div className="flex space start">
        <Name/>
        <Delete/>
      </div>
    </div>
  )
}

export default Consumer(Edit)