import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from '@svgr/rollup'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    svgr({ 
      exportType: 'named',
      typescript: true,
      svgrOptions: {
        ref: true,
        titleProp: true,
      }
    }),
    tailwindcss(),
  ],
})
