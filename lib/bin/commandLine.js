#!/usr/bin/env node --enable-source-maps
import { appStatus, brightRed, options, quit } from '@abw/badger'
import { dir, file } from '@abw/badger-filesystem'
import { fail } from '@abw/badger-utils'

export const commandLine = appStatus(
  async function(props={}) {
    // caller must provide a generator function
    const generator = props.generator
      || fail('No generator function defined')

    // read command line options
    const config = (await readCommandLine(props))
      || quit(brightRed('Cancelled'))

    // read the palette file
    const pfile = file(config.palette, { codec: 'auto' })
    if (! await pfile.exists()) {
      fail(`Palette file not found: ${config.palette}`)
    }
    const palette = await pfile.read()

    // create the output dir if necessary
    const output = dir(config.output)
    await output.mustExist({ create: true })

    // run the generator
    return generator({
      ...props,
      ...config,
      palette,
      output
    })
  }
)

async function readCommandLine(props={}) {
  return await options({
    name:         props.name,
    version:      props.version,
    description:  props.description,
    yes:          true,
    verbose:      true,
    quiet:        true,
    options: [
      {
        name:     'config',
        short:    'c',
        about:    'Configuration file',
        type:     'text',
        // prompt:   'Where is the configuration file?',
        required: false,
        default:  props.config,
      },
      {
        name:     'palette',
        short:    'p',
        about:    'Palette data file',
        type:     'text',
        prompt:   'Where is the palette data file?',
        required: true,
        default:  props.palette,
      },
      {
        name:     'output',
        short:    'o',
        about:    'Output directory',
        type:     'text',
        prompt:   'Where should the output files be written?',
        required: true,
        default:  props.output,
      },
    ]
  })
}

export default commandLine