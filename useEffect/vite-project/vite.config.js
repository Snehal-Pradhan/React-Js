import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-snehalpradhan-reactjs-ow0ng04zrwy.ws-us118.gitpod.io'
    ]
}}
)