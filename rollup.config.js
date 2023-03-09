/* eslint-disable @typescript-eslint/typedef */
import json from '@rollup/plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const rollupConfig = {
	input: 'lib/index.ts',

	external: ['react', 'react-dom', 'react/jsx-runtime', '@popperjs/core', 'modern-normalize'],

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
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: 'es',
			exports: 'named',
			sourcemap: true,
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
