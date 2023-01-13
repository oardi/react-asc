import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const rollupConfig = {
	input: 'lib/index.ts',

	external: ['react', 'react-dom', '@popperjs/core', 'modern-normalize'],

	// preserveModules: true,

	// output: {
	// 	dir: 'dist',
	// 	format: 'esm',
	// 	preserveModules: true,
	// 	preserveModulesRoot: 'src',
	// 	sourcemap: true,
	// },

	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
		},
		{
			file: pkg.module,
			format: 'es',
			exports: 'named',
		},
	],

	plugins: [
		resolve(),
		commonjs(),
		external(),
		typescript({
			tsconfig: 'tsconfig.lib.json',
			declaration: true,
			declarationDir: 'dist',
		}),
		postcss({
			extract: false,
			modules: true,
			use: ['sass'],
		}),
		json(),
	],
};

export default rollupConfig;
