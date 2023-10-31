import React, { useState } from 'react'
import Button from '../ui/Button.jsx'
import { URLS } from '../site/URLS.jsx'
import { Consumer } from '../palettes/Context.jsx'
import { useNavigate } from 'react-router-dom'
import { Form, Field, useForm } from '@abw/react-formula'
import { nameToURI, namesToAliases } from '../../lib/utils/index.js'
import Theme from '../site/Theme.jsx'

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
  aliases: {
    label: 'Aliases',
    required: false,
    help: 'Any aliases for this range',
    prepareValue: value => namesToAliases(value),
    validateOnChange: true,
    minValidateLength: 1,
  },
  greyscale: {
    type:  'checkbox',
    text:  'Greyscale',
    help:  'Set this for grey ranges (used for sorting)'
  },
}

const Edit = ({ palette, range, editRange, close }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState(false)
  const initialURI = range.uri
  const submit = values => {
    editRange(values)
    close()
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
      <header>
        <h2>Edit Range Metadata</h2>
      </header>
      <Form
        values={range} fields={fields}
        onLoad={setForm}
        onSubmit={submit}
      >
        <NameField/>
        <Field
          name="uri"
          validate={checkURIAvailable}
          wide
        />
        <Field name="aliases" wide/>
        <Field name="greyscale" wide/>
      </Form>
      <footer className="flex space mar-t-8">
        <Button
          color={Theme.colors.cancel}
          text="Cancel"
          iconRight="cross"
          onClick={close}
        />
        <Button
          color={Theme.colors.save}
          text="Save"
          iconRight="check"
          solid
          onClick={e => form.submit(e)}
        />
      </footer>
    </>
  )
}

const NameField = () => {
  const { setValues } = useForm()
  return <Field
    name="name"
    onChange={field => setValues({ uri: nameToURI(field.value) })}
    wide
  />
}

export default Consumer(Edit)