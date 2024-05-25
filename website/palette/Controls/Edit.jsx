import React, { useState } from 'react'
import Theme from '@/site/Theme.jsx'
import { URLS } from '@/site/URLS.jsx'
import { Consumer } from '@/palettes/Context.jsx'
import { nameToURI } from '@/lib/utils/index.js'
import { useNavigate } from 'react-router-dom'
import { Button, Modal, Form, Field, Fields, useForm } from '@abw/badger-react-ui'
import * as yup  from 'yup'

const fields = {
  name: {
    label: 'Name',
    required: true,
    help: 'A name for the palette',
  },
  uri: {
    label: 'URI',
    required: true,
    help: 'A unique identifier used for links',
    prepareValue: value => nameToURI(value),
    validateOnChange: true,
    minValidateLength: 1,
  },
  comment: {
    label: 'Comment',
    help: 'An optional comment about this palette'
  },
  source: {
    label: 'Source',
    help: 'An optional URL indicating the source of the palette',
    validate: value =>
      value.length
        ? yup
          .string()
          .trim()
          .matches(/^https?:\/\//, 'The source should be a URL starting with http:// or https://')
          .validate(value)
        : value
  }
}

const Edit = ({ palette, palettes, editPalette }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(false)
  const initialURI = palette.uri
  const close = () => setOpen(false)
  const submit = values => {
    editPalette(values)
    form.reset()
    setOpen(false)
    navigate(URLS.palette.home(values.uri))
  }
  const checkURIAvailable = (value, field, resolve, reject) => {
    const existing = palettes[value]
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
        className="icon"
        data-tooltip="bottom right"
        aria-label="Edit palette metadata"
      />
      <Modal open={open} close={close} className="text-left">
        <header>
          <h2 className="mar-v-none">Edit Palette Metadata</h2>
        </header>
        <Form
          fields={fields}
          values={palette}
          onLoad={setForm}
          onSubmit={submit}
          wide
        >
          <NameField/>
          <Field
            name="uri"
            validate={checkURIAvailable}
            wide
          />
          <Fields names="comment source" wide/>
        </Form>
        <footer className="flex space mar-t-8">
          <Button
            color={Theme.colors.cancel}
            text="Cancel"
            iconRight="cross"
            outline
            onClick={close}
          />
          <Button
            color={Theme.colors.save}
            text="Save"
            iconRight="check"
            onClick={e => form.submit(e)}
          />
        </footer>
      </Modal>
    </>
  )
}

const NameField = () => {
  const { setValues } = useForm()
  return (
    <Field
      name="name"
      onChange={field => setValues({ uri: nameToURI(field.value) })}
      wide
    />
  )
}

export default Consumer(Edit)