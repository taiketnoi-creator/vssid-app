import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function preloadLoginAssetsPlugin() {
  return {
    name: 'preload-login-assets',
    transformIndexHtml(html, ctx) {
      if (!ctx || !ctx.bundle) return html
      const tags = []
      for (const fileName of Object.keys(ctx.bundle)) {
        if (
          fileName.includes('bg_login') ||
          fileName.includes('logo_bhxh') ||
          fileName.includes('bg_footer') ||
          fileName.includes('logo_vneid') ||
          fileName.includes('fingerprint')
        ) {
          tags.push({
            tag: 'link',
            attrs: {
              rel: 'preload',
              as: 'image',
              href: `./${fileName}`,
              fetchpriority: 'high',
            },
            injectTo: 'head-prepend',
          })
        }
      }
      return tags
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    preloadLoginAssetsPlugin(),
  ],
})


