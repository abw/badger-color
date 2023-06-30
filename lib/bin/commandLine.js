#!/usr/bin/env node --enable-source-maps
import { appStatus, brightRed, quit } from '@abw/badger'
import { fail } from '@abw/badger-utils'
import { configure } from './configure.js'

export const commandLine = appStatus(
  async function(props={}) {
    // caller must provide a generator function
    const generator = props.generator
      || fail('No generator function defined')

    // read command line options
    const config = (await configure(props))
      || quit(brightRed('Cancelled'))

    // run the generator
    return generator({
      ...props,
      ...config,
    })
  }
)


export default commandLine