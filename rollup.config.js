import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import json from '@rollup/plugin-json';
import pkg from "./package.json";
import url from '@rollup/plugin-url';

const rollupConfig = {
	input: "src/lib/index.ts",
	external: ['react', 'react-dom', '@popperjs/core'],
	output: [
		{
			file: pkg.main,
			format: "cjs",
			exports: "named",
			sourcemap: true
		},
		{
			file: pkg.module,
			format: "es",
			exports: "named",
			sourcemap: true
		}
	],
	plugins: [
		external(),
		resolve(),
		typescript({
			tsconfig: "tsconfig.lib.json",
			rollupCommonJSResolveHack: true,
			exclude: "**/__tests__/**",
			clean: true
		}),
		commonjs(),
		json(),
		url()
	]
};

export default rollupConfig;
