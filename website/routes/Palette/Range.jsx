import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Range = ({ range, selectRange}) => {
  const { rangeUri } = useParams()

  useEffect(
    () => {
      selectRange(rangeUri)
    },
    [rangeUri]
  )

  if (uri !== palette?.uri) {
    return <div className="loading">Loading...</div>
  }

  return (
    <Provider>
      <section className="palette">
        <Header/>
        <Outlet/>
        <Footer/>
      </section>
    </Provider>
  )
}

export default Range