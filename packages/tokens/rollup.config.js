import path from 'path';

import postcssNested from 'postcss-nested';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import renameNodeModules from 'rollup-plugin-rename-node-modules';
import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
	{
		input  : ['src/index.ts'],
		output : [
			{
				dir                 : 'dist/es',
				format              : 'esm',
				sourcemap           : true,
				preserveModules     : true,
				preserveModulesRoot : path.join(__dirname, 'src'),
			},
			{
				dir                 : 'dist/cjs',
				format              : 'cjs',
				exports             : 'named',
				sourcemap           : true,
				preserveModules     : true,
				preserveModulesRoot : path.join(__dirname, 'src'),
			},
		],
		external : ['react'],
		plugins  : [
			del({ targets: 'dist/*' }),
			postcss({ modules: true, plugins: [postcssNested] }),
			typescript({
				useTsconfigDeclarationDir : true,
				tsconfig                  : 'tsconfig.json',
				tsconfigOverride          : { compilerOptions: { declaration: true, declarationDir: 'dist/types' } },
			}),
			terser(),
			renameNodeModules('_vendors'),
			summary({
				showMinifiedSize : true,
				showGzippedSize  : true,
				showBrotliSize   : true,
			}),
		],
	},
];
