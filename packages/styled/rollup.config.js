const commonjs = require('@rollup/plugin-commonjs');
const multi = require('@rollup/plugin-multi-entry');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
	input  : ['src/**/*.{js}'],
	output : [
		{ dir: 'dist/esm', format: 'es' },
		{ dir: 'dist/cjs', format: 'cjs', exports: 'auto' },
	],
	plugins: [
		peerDepsExternal(),
		commonjs(),
		multi(),
	],
};
