import path from 'path'
import react from '@vitejs/plugin-react'
import { UserConfig } from 'vite'

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST

export default {
  plugins: [react()],

  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/App'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@client': path.resolve(__dirname, 'src/client'),
      '@router': path.resolve(__dirname, 'src/Router'),
      '@provider': path.resolve(__dirname, 'src/Provider'),
      '@constants': path.resolve(__dirname, 'src/Constants'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
    },
  },

  // vite options for tauri

  // prevents vite from obscuring rust errors
  clearScreen: false,

  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },
} satisfies UserConfig
