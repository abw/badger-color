import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'
import copy from 'rollup-plugin-copy'

const PACKAGE_NAME = 'badger-color'
const PACKAGE_DIST = `@abw/badger-color`

export default defineConfig({
  plugins: [
    react(),
    svgr(),
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
      entry: 'lib/index.jsx',
      name: PACKAGE_DIST,
      fileName: PACKAGE_NAME,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'styles/*',
              dest: 'dist/styles',
            },
            {
              src: 'src/config/*',
              dest: 'dist/config',
            },
            {
              src: 'bin/*',
              dest: 'dist/bin',
              transform: (contents) =>
                contents
                  .toString()
                  .replace(
                    '../src/config/',
                    `${PACKAGE_DIST}/config/`
                  )
            },
          ],
          hook: 'writeBundle'
        })
      ]
    },
  },
})
