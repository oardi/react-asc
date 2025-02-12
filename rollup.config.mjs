import json from '@rollup/plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import dts from 'rollup-plugin-dts';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' with { type: 'json' };

export default [
	{
		input: 'lib/index.ts',

		external: ['react', 'react-dom', 'react/jsx-runtime', '@popperjs/core', 'modern-normalize', 'papaparse', 'file-saver'],

		output: [
			{
				file: pkg.main,
				format: 'cjs',
				exports: 'named',
				// sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'es',
				exports: 'named',
				// sourcemap: true,
			},
		],

		plugins: [
			resolve(),
			commonjs(),
			external(),
			typescript({
				tsconfig: 'tsconfig.lib.json',
				// declaration: true,
				// declarationDir: 'dist',
				// useTsconfigDeclarationDir: true,
			}),
			postcss({
				extract: false,
				modules: true,
				use: ['sass'],
			}),
			json(),
		],
	},
	{
		// path to your declaration files root
		input: './dist/lib/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		plugins: [dts()],
	},
];
