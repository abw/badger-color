import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'

const PACKAGE_NAME = 'badger-color'

export default defineConfig({
  plugins: [react(), svgr()],
  root: 'website',
  base: `/${PACKAGE_NAME}/`,
  define,
  build: {
    emptyOutDir: true,
    outDir: '../docs'
  }
})

