import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-helmet-async'],
          'firebase': ['firebase/app', 'firebase/analytics', 'firebase/firestore'],
          'animation': ['lottie-react', 'react-type-animation', 'react-tsparticles', 'tsparticles'],
          'icons': ['react-icons/fi', 'react-icons/fa', 'react-icons/si'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})