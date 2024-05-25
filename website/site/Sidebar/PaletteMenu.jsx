import React from 'react'
import Theme from '../Theme.jsx'
import Range from './Range.jsx'
import { Button } from '@abw/badger-react-ui'

const PaletteMenu = ({
  palette,
  newRange
}) => {
  const ranges = Object.values(palette.ranges)
  const colors = ranges.filter( range => ! range.greyscale )
  const greys  = ranges.filter( range => range.greyscale )

  return (
    <div className="ranges menu">
      <div className="flex space end pad-v">
        <h4 className="mar-v-none">Ranges</h4>
        <Button
          color={Theme.colors.add}
          icon="plus"
          className="smaller icon"
          onClick={newRange}
        />
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
  )
}
export default PaletteMenu
