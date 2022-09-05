import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
	input  : ['src/index.js'],
	output : [
		{ dir: 'dist/es', format: 'es' },
		{ dir: 'dist/cjs', format: 'cjs', exports: 'auto' },
	],
	plugins: [
		peerDepsExternal(),
		commonjs(),
		copy({
			targets: [
				{ src: './package.json', dest: 'dist' },
			],
		}),
	],
};
