// Packages
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

// Ours
import pkg from './package.json';

export default [
	{
		input: './src/index.js',
		output: [
			{
				name: 'ReactChatStuff',
				file: pkg.main,
				format: 'umd',
				globals: {
					react: 'React'
				}
			},
			{
				file: pkg.module,
				format: 'esm'
			}
		],
		external: ['react'],
		plugins: [
			babel({
				exclude: 'node_modules/**'
			}),
			resolve(),
			commonjs()
		]
	}
];
