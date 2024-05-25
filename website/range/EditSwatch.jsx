import React from 'react'
import Theme from '@/site/Theme.jsx'
import { useState } from 'react'
import { Consumer } from '@/palettes/Context.jsx'
import { colorToHSL } from '@/lib/utils/color.js'
import { Button, Modal, Form, Field } from '@abw/badger-react-ui'

const fields = {
  hex: {
    type: 'color',
  },
}

const EditSwatch = ({
  stop,
  setStop,
  close
}) => {
  const [form, setForm] = useState(false)
  const submit = values => {
    setStop(stop.n, colorToHSL(values.hex))
    close()
  }
  return (
    <Modal open={true} close={close}>
      <h2 className="mar-t-none mar-b-4">Edit Stop {stop.n}</h2>
      <Form
        fields={fields}
        values={stop}
        onLoad={setForm}
        onSubmit={submit}
        wide
      >
        <Field name="hex" wide/>
        <div className="flex gap-4 space mar-t-8">
          <Button
            color={Theme.colors.cancel}
            text="Cancel"
            iconRight="cross"
            type="button"
            onClick={close}
            outline
          />
          <Button
            color={Theme.colors.save}
            text="Save"
            iconRight="check"
            onClick={e => form.submit(e)}
          />
        </div>
      </Form>
    </Modal>
  )
}

export default Consumer(EditSwatch)