import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filePath = fileURLToPath(import.meta.url)
const __dirname = dirname(__filePath)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
    },
  },
})
