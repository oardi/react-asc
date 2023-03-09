import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	server: {
		port: 3333,
	},
	plugins: [
		react(),
		tsconfigPaths(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
			manifest: {
				short_name: 'react-asc',
				name: 'react-asc',
				description: 'handcrafted react components written in Typescript inspired by Material Design',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
				start_url: '.',
				display: 'standalone',
				theme_color: '#f8f9fa',
				background_color: '#f5f6fa',
			},
		}),
	],
});
