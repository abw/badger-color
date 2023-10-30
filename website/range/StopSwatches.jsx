import React from 'react'
import { Swatch, Black, White } from '../color/index.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { Consumer } from '../palettes/Context.jsx'
import { useState } from 'react'
import EditSwatch from './EditSwatch.jsx'

const StopSwatches = ({
  options,
  range,
  toggleLock,
  clickToEdit
}) => {
  const [edit, setEdit] = useState(false)
  const clickTooltip = (e, n) => {
    e.preventDefault()
    e.stopPropagation()
    const stop = range.stops[n]
    setEdit({ ...stop, n })
  }
  return (
    <>
      <div className="swatches">
        { options.blackWhite && <Black/>}
        { numberRange(0, 100, options.show5s ? 5 : 10).map(
          n =>
            <Swatch
              key={n}
              stop={n}
              color={range.stops[n]}
              clickable={true}
              onClick={e => clickToEdit ? clickTooltip(e, n) : toggleLock(n)}
              lockable={! clickToEdit}
              editable={clickToEdit}
              showLock={true}
            />
        )}
        { options.blackWhite && <White/>}
      </div>
      { Boolean(edit) &&
        <EditSwatch
          close={() => setEdit(false)}
          stop={edit}
        />
      }
    </>
  )
}

export default Consumer(StopSwatches)