import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      // pass custom options to the resolve plugin
      moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
