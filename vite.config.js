import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// proxy--> request will be made from the port 5173,but due to proxy will act as request is made from the serverPort-3000

export default defineConfig({
  plugins: [react()],
  server:
  {
    proxy:{
      '/api':{
        target: 'http://localhost:3000',
        changeOrigin:true
      }
    }
  }
})
