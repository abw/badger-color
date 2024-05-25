import React from 'react'
import Theme from '../Theme.jsx'
import Range from './Range.jsx'
import UploadRange from './UploadRange.jsx'
import { Button, Modal } from '@abw/badger-react-ui'

const PaletteMenu = ({
  palette,
  newRange
}) => {
  const [upload, setUpload] = React.useState(false)
  const openUpload = () => setUpload(true)
  const closeUpload = () => setUpload(false)
  const ranges = Object.values(palette.ranges)
  const colors = ranges.filter( range => ! range.greyscale )
  const greys  = ranges.filter( range => range.greyscale )

  return (
    <>
      <div className="ranges menu">
        <div className="flex space end pad-v">
          <h4 className="mar-v-none">Ranges</h4>
          <div className="smaller flex gap-2">
            <Button
              color="violet"
              icon="upload"
              onClick={openUpload}
              data-tooltip="bottom left"
              aria-label="Upload a range"
            />
            <Button
              color={Theme.colors.add}
              icon="plus"
              onClick={newRange}
              data-tooltip="bottom left"
              aria-label="Add a range"
            />
          </div>
        </div>
        { colors.map(
          range =>
            <Range
              key={range.uri}
              palette={palette}
              range={range}
            />
        )}
        { Boolean(greys.length) &&
          <div className="pad-v">
            <h4 className="mar-v-none">Greyscales</h4>
            { greys.map(
              range =>
                <Range
                  key={range.uri}
                  palette={palette}
                  range={range}
                />
            )}
          </div>
        }
      </div>
      { upload &&
        <Modal open={upload} close={closeUpload} className="max-width-40rem">
          <UploadRange close={closeUpload}/>
        </Modal>
      }
    </>
  )
}
export default PaletteMenu
