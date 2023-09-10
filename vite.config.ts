import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popout: resolve(__dirname, 'src/pages/popout/popout.html'),
        options: resolve(__dirname, 'src/pages/options/options.html'),
        background: resolve(__dirname, 'src/backgroundScripts/background.ts'), 
        appendCompactWidget: resolve(__dirname, 'src/contentScripts/appendCompactWidget.tsx')       
      },
      output: {
        entryFileNames: '[name].js',
        dir: resolve(__dirname, 'dist'),
        assetFileNames: 'assets/[name].[ext]'
      },
    },
    sourcemap: true,
  }
})
