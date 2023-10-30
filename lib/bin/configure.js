import { cmdLineFlags, brightWhite, quit } from '@abw/badger'
import { dir, file } from '@abw/badger-filesystem'
import { fail } from '@abw/badger-utils'

export async function configure({ name, description, version }) {
  // read the command line flags
  const { flags } = cmdLineFlags({
    options: 'config palette output verbose help version',
    short: {
      c: 'config',
      p: 'palette',
      o: 'output',
      v: 'verbose',
      h: 'help',
      V: 'version'
    },
    on: {
      help:    () => help({ name, description, version }),
      version: () => quit(`Version ${version}`),
      config: (name, arg, args, flags) => {
        flags.config = args.shift()
          || fail(`No config file specified for the ${arg} option`)
        return true
      },
      palette: (name, arg, args, flags) => {
        flags.palette = args.shift()
          || fail(`No palette file specified for the ${arg} option`)
        return true
      },
      output: (name, arg, args, flags) => {
        flags.output = args.shift()
          || fail(`No output directory specified for the ${arg} option`)
        return true
      },
    }
  })
  const config = flags.config
    ? { ...(await readConfigFile(flags.config)), ...flags }
    : flags

  config.palette = config.palette
    ? await readPaletteFile(config.palette)
    : fail(`No palette file specified`)

  config.output = config.output
    ? await openOutputDir(config.output)
    : fail(`No output directory specified`)

  return config
}

async function readFile(path, type) {
  const f = file(path, { codec: 'auto' })
  const exists  = await f.exists()
  if (! exists) {
    fail(`${type} file does not exist: $f`)
  }
  return await f.read()
}

export async function readConfigFile(path) {
  return await readFile(path, 'Configuration')
}

export async function readPaletteFile(path) {
  return await readFile(path, 'Palette')
}

export async function openOutputDir(path)  {
  const output = dir(path)
  await output.mustExist({ create: true })
  return output
}

function help({ name, description, version }) {
  const script   = brightWhite(name)
  const usage    = brightWhite('Usage')
  const options  = brightWhite('Options')
  const examples = brightWhite('Examples')
  quit(`${script} v${version}

  ${description}

${usage}:
  ${script} [options]

${options}:
  -c <file> / --config <file>   Configuration file (.json or .yaml)
  -p <file> / --palette <file>  Palette file
  -o <dir>  / --output <dir>    Output directory
  -v        / --verbose         Verbose mode
  -V        / --version         Print version number
  -h        / --help            This help

${examples}
  ${script} -p config/palette-data.json -o styles/palette
  ${script} -p config/palette.json -c config/palette-map.json -o styles/palette
`)
}
