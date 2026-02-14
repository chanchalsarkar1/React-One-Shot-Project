import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'		// 2nd line
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
