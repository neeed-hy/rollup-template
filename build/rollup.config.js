import path from 'path'
import { defineConfig } from 'rollup'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias'
import eslint from '@rollup/plugin-eslint'
import dev from 'rollup-plugin-dev'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const resolveDir = (dir) => path.join(__dirname, dir)

const isDev = process.env.ENV === 'dev'

const options = defineConfig({
  input: 'src/index.ts', // 打包入口
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: !!isDev
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'nd_ut',
      sourcemap: !!isDev
    }
  ],
  plugins: [
    eslint(),
    typescript({
      exclude: ['node_modules/**']
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    alias({
      entries: [{ find: '@', replacement: resolveDir('src') }]
    })
  ]
})
if (isDev) {
  options.plugins.push(
    livereload(),
    dev({
      port: 3456
    })
  )
} else {
  options.plugins.push(terser())
}
export default options
