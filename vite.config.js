import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // This ensures all paths are relative, so it works on GitHub AND HostGator
  build: {
    outDir: 'public_html',
    emptyOutDir: true,
  }
})
