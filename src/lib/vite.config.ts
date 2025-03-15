import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	root: './src/lib',
	build: {
		lib: {
			entry: 'index.ts',
			name: 'react-asc',
			fileName: format => `index.${format}.js`,
			formats: ['es', 'cjs', 'umd'],
		},
		outDir: '../../dist/lib',
		rollupOptions: {
			external: [/^react/, /^react-dom/, '@popperjs/core', 'modern-normalize', 'papaparse', 'file-saver', 'react-calendar'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'jsxRuntime',
					'@popperjs/core': 'Popper',
					'modern-normalize': 'modernNormalize',
					papaparse: 'Papa',
					'file-saver': 'FileSaver',
					'react-calendar': 'ReactCalendar',
				},
			},
		},
	},
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
		tsconfigPaths(),
		cssInjectedByJsPlugin({
			relativeCSSInjection: true,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '.'),
		},
	},
});
