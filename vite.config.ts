import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
			manifest: {
				"short_name": "react-asc",
				"name": "react-asc",
				"description": "handcrafted react components written in Typescript inspired by Material Design",
				"icons": [
					{
						"src": "pwa-192x192.png",
						"sizes": "192x192",
						"type": "image/png",
					},
					{
						"src": "pwa-512x512.png",
						"sizes": "512x512",
						"type": "image/png",
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				],
				"start_url": ".",
				"display": "standalone",
				"theme_color": "#3f51b5",
				"background_color": "#f5f6fa"
			}
		})
	]
})
