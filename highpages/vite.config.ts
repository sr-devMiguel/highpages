import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const reactPlugin = (await import('@vitejs/plugin-react')).default

  return {
    root: 'frontend',
    plugins: [reactPlugin()],
    server: { port: 5173 },
  }
})
