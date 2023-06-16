import React from 'react'

const customStyle = `
  .border-style-example .border {
    --border-width:  3px;
    --border-radius: 10px;
  }
  .border-style-example .danger {
    --border-color: var(--red-50);
  }
  .border-style-example .success {
    --border-color: var(--green-50);
  }
`

const BorderStyle = () =>
  <>
    <style>{customStyle}</style>
    <div className="border-style-example">
      <div className="border pad-4 mar-b-4">
        This element has the default border.
      </div>
      <div className="border danger pad-4 mar-b-4">
        This has the danger border
      </div>
      <div className="border success pad-4 mar-b-4">
        This has the success border
      </div>
    </div>
  </>

export default BorderStyle
