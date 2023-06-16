import React from 'react'

const SurfaceBorders = () =>
  <div className="surface-0 border pad-2">
    <div className="surface-1 border pad-2 mar-b-2">
      surface-1
    </div>
    <div className="surface-2 border pad-2 mar-b-2">
      surface-2
    </div>
    <div className="surface-3 border pad-2 mar-b-2">
      surface-3
    </div>
    <div className="surface-4 border pad-2 mar-b-2">
      surface-4
    </div>
    <div className="surface-1 border shadow-1 pad-4">
      surface-1 shadow-1
      <div className="surface-2 border shadow-2 pad-4 mar-t-2">
        surface-2 shadow-2
        <div className="surface-3 border shadow-3 pad-4 mar-t-2">
          surface-3 shadow-3
          <div className="surface-4 border shadow-4 pad-4 mar-t-2">
            surface-4 shadow-4
          </div>
        </div>
      </div>
    </div>
  </div>

export default SurfaceBorders
