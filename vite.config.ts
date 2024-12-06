import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "Project in a Day Dashboard",
        short_name: "Dashboard",
        description: "Track progress of Project in a Day initiatives",
        id: "project-dashboard-pwa",
        start_url: "/PWA003/",
        scope: "/PWA003/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4B0082",
        orientation: "any",
        icons: [
          {
            src: "/PWA003/icons/icon-144.svg",
            sizes: "144x144",
            type: "image/svg+xml",
            purpose: "any"
          },
          {
            src: "/PWA003/icons/icon-512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any"
          },
          {
            src: "/PWA003/icons/icon-maskable.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable"
          }
        ],
        screenshots: [
          {
            src: "/PWA003/screenshots/desktop.svg",
            sizes: "1920x1080",
            type: "image/svg+xml",
            form_factor: "wide"
          },
          {
            src: "/PWA003/screenshots/mobile.svg",
            sizes: "430x932",
            type: "image/svg+xml"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,ico,txt,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  base: '/PWA003/'
})