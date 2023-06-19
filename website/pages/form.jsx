import React from 'react'
import { Form, Field, Submit } from '@abw/react-formula'

const MyFirstForm = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      required
    />
    <Field
      name="password"
      type="password"
      label="Password"
      required
    />
    <Field
      name="trusted"
      type="checkbox"
      text="Keep me logged in"
    />
    <Submit/>
  </Form>

export default MyFirstForm