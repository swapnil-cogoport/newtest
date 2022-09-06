import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import del from 'rollup-plugin-delete';
// import dts from 'rollup-plugin-dts';
import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input  : ['src/index.ts'],
    output : [
      {
        dir             : 'dist/es',
        format          : 'esm',
        sourcemap       : true,
        preserveModules : true,
      },
      {
        dir             : 'dist/cjs',
        format          : 'cjs',
        exports         : 'named',
        sourcemap       : true,
        preserveModules : true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({
        useTsconfigDeclarationDir : true,
        tsconfig                  : 'tsconfig.json',
        tsconfigOverride          : { compilerOptions: { declarationDir: 'dist/types' } },
      }),
      terser(),
      copy({ targets: [{ src: './package.json', dest: 'dist' }] }),
      // bundleSize(),
      // sizeSnapshot(),
      summary({
        showMinifiedSize : true,
        showGzippedSize  : true,
        showBrotliSize   : true,
      }),
    ],
  },
];
