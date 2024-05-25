import React from 'react'
import Palette from './Palette.jsx'
import Upload from './Upload.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import { URLS } from '../URLS.jsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, Modal } from '@abw/badger-react-ui'

const Sidebar = ({
  palette,
  palettes,
  createPalette,
  createRange,
}) => {
  const navigate = useNavigate()
  const newPalette = () => {
    const p = createPalette()
    navigate(URLS.palette.home(p.uri))
  }
  const newRange = () => {
    const r = createRange()
    navigate(URLS.palette.range(palette.uri, r.uri))
  }
  const [upload, setUpload] = useState(false)
  const openUpload = () => setUpload(true)
  const closeUpload = () => setUpload(false)
  const myPalettes = Object.entries(palettes)

  return (
    <>
      <div className="menu">
        <div className="flex space start mar-b-2">
          <h3 className="mar-v-none">My Palettes</h3>
          <div className="smaller">
            <Button
              color="violet"
              className="icon"
              icon="upload"
              onClick={openUpload}
              data-tooltip="bottom left"
              aria-label="Upload a palette"
            />
            <Button
              color="green"
              className="icon mar-l-2"
              icon="plus"
              onClick={newPalette}
              data-tooltip="bottom left"
              aria-label="Create a new palette"
            />
          </div>
        </div>
        { myPalettes.length
          ? myPalettes.map(
            ([uri, p]) =>
              <Palette
                key={uri}
                uri={uri}
                p={p}
                palette={palette}
                newRange={newRange}
              />
          )
          : <div className="small pad-l-2 fgc-50">No custom palettes</div>
        }
      </div>
      { upload &&
        <Modal open={upload} close={closeUpload} className="max-width-40rem">
          <Upload close={closeUpload}/>
        </Modal>
      }
    </>
  )
}

export default Consumer(Sidebar)
