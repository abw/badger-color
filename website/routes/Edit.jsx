import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from '../palettes/Context.jsx'
import Name from '../palette/Name.jsx'

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
      <Name/>
    </div>
  )
}

export default Consumer(Edit)