import path from 'path'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  ssr: { noExternal: command === 'build' ? true : undefined },
  plugins: [reactRouter(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './app') } },
}))
