import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsconfigPaths from 'vite-tsconfig-paths';

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
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
		viteTsconfigPaths(),
	],
	css: {
		modules: {
			localsConvention: 'camelCase',
			generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '.'),
		},
	},
});
