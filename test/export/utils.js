import { it, expect } from 'vitest'
import { defaultSemanticColors, expandColorScopes, invertSemanticColors, listifySelectorValues } from '../../lib/index.js'

it(
  'invertSemanticColors',
  () => expect(
    invertSemanticColors(defaultSemanticColors)
  ).toStrictEqual({
    blue: ['info', 'focus'],
    green: ['success', 'valid'],
    orange: ['warning'],
    red: ['error', 'invalid'],
  })
)

it(
  'listifySelectorValues',
  () => expect(
    listifySelectorValues({
      foo: 'bar',
      baz: ['wam', 'bam']
    })
  ).toStrictEqual({
    foo: ['bar'],
    baz: ['wam', 'bam'],
  })
)

it(
  'expandColorScopes',
  () => expect(
    expandColorScopes(
      defaultSemanticColors,
      {
        info:     '.info',
        success:  '.success',
        warning:  '.warning',
        error:    '.error',
        focus:    '.focus',
        valid:    '.valid',
        invalid:  '.invalid',
      }
    )
  ).toStrictEqual({
    blue:   '.info, .focus',
    green:  '.success, .valid',
    orange: '.warning',
    red:    '.error, .invalid',
  })
)
