import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions} */
export default [
	{
		input: './src/content.ts',
		output: {file: './lib/content.js'},
		plugins: [
			typescript(),
			nodeResolve(),
			terser({
				format: {
					comments: false,
				},
			}),
		],
	},
	{
		input: './src/background.ts',
		output: {file: './lib/background.js'},
		plugins: [
			typescript(),
			nodeResolve(),
			terser({
				format: {
					comments: false,
				},
			}),
		],
	},
];
