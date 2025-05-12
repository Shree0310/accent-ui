import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript(),
    postcss({
      extensions: ['.css'],
    }),
  ],
};