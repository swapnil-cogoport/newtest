import copy from 'rollup-plugin-copy';
// import del from 'rollup-plugin-delete';
// import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
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
      copy({ targets: [{ src: './package.json', dest: 'dist' }] }),
    ],
  },
];
