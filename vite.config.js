import { defineConfig } from 'vite'
import react    from '@vitejs/plugin-react'
import define   from  './vite.defs.js'
import svgr     from 'vite-plugin-svgr'
import copy     from 'rollup-plugin-copy'
import jsconfig from 'vite-jsconfig-paths'

const PACKAGE_NAME = 'badger-color'
const PACKAGE_DIST = `@abw/badger-color`

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfig({ root: '../' })
  ],
  define,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js', 'test/lib'],
    coverage: {
      provider: 'c8',
      reporter: ['html']
    }
  },
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.js',
      name: PACKAGE_DIST,
      fileName: PACKAGE_NAME,
    },
    rollupOptions: {
      external: [
        '@abw/badger',
        '@abw/badger-filesystem',
        '@abw/badger-utils'
      ],
      output: {
        globals: {
          '@abw/badger': '@abw/badger',
          '@abw/badger-filesystem': '@abw/badger-filesystem',
          '@abw/badger-utils': '@abw/badger-utils'
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'bin/badger-color-scss.js',
              dest: 'dist/bin',
              transform: (contents) =>
                contents
                  .toString()
                  .replace(
                    "'PACKAGE_VERSION'",
                    define.PACKAGE_VERSION
                  )
                  .replace(
                    '../lib/index.js',
                    PACKAGE_DIST
                  )
            },
          ],
          hook: 'writeBundle'
        })
      ]
    },
  },
})
