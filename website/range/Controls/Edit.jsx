import React, { useState } from 'react'
import Button from '../../ui/Button.jsx'
import Modal from '../../ui/Modal.jsx'
import { URLS } from '../../site/URLS.jsx'
import { Consumer } from '../../palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { Form, Field, useForm } from '@abw/react-formula'
import { nameToURI } from '../../../lib/utils/index.js'
import Theme from '../../site/Theme.jsx'

const fields = {
  name: {
    label: 'Name',
    required: true,
    help: 'A name for the range'
  },
  uri: {
    label: 'URI',
    required: true,
    help: 'A unique identifier used for links',
    prepareValue: value => nameToURI(value),
    validateOnChange: true,
    minValidateLength: 1,
  },
}

const Edit = ({ palette, range, editRange }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(false)
  const initialURI = range.uri
  const cancel = () => {
    setOpen(false)
  }
  const submit = values => {
    editRange(values)
    setOpen(false)
    navigate(URLS.palette.range(palette.uri, values.uri))
  }
  const checkURIAvailable = (value, field, resolve, reject) => {
    const existing = palette.ranges[value]
    if (existing && value !== initialURI) {
      reject({
        value,
        message: `${value} is already being used`
      })
    }
    resolve({
      value,
      message: `URI is available`
    })
  }

  return (
    <>
      <Button
        color={Theme.colors.edit}
        icon="pen"
        onClick={() => setOpen(true)}
        className="mar-l-2"
        solid
      />
      <Modal open={open} className="text-left">
        <Form
          values={range} fields={fields}
          onLoad={setForm}
          onSubmit={submit}
        >
          <NameField/>
          <Field
            name="uri"
            validate={checkURIAvailable}
          />
        </Form>
        <div className="flex space mar-t-8">
          <Button
            color={Theme.colors.cancel}
            text="Cancel"
            iconRight="cross"
            onClick={cancel}
          />
          <Button
            color={Theme.colors.save}
            text="Save"
            iconRight="check"
            solid
            onClick={e => form.submit(e)}
          />
        </div>
      </Modal>
    </>
  )
}

const NameField = () => {
  const { setValues } = useForm()
  return <Field
    name="name"
    onChange={field => setValues({ uri: nameToURI(field.value) })}
  />
}

export default Consumer(Edit)