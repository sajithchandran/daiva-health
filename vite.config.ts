import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Preload the Outfit weights used above the fold so the font downloads
// in parallel with the CSS instead of waiting for it (shorter critical chain).
function preloadFonts(patterns: RegExp[]): Plugin {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml(_html, ctx) {
      if (!ctx.bundle) return
      return Object.keys(ctx.bundle)
        .filter(file => patterns.some(p => p.test(file)))
        .map(file => ({
          tag: 'link',
          attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${file}`, crossorigin: '' },
          injectTo: 'head-prepend' as const,
        }))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    preloadFonts([/outfit-latin-300-normal-.*\.woff2$/, /outfit-latin-400-normal-.*\.woff2$/]),
  ],
})
