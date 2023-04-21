import babel from '@rollup/plugin-babel'
import fs from 'fs'
import glob from 'glob'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript';

const banner = `/***

 ~~~ Version ${process.env.npm_package_version} ~~~

 ******************************************

    ____                   _____      __          __ 
   / __ \\_________ _____ _/ ___/___  / /__  _____/ /_
  / / / / ___/ __ \`/ __ \`/\\__ \\/ _ \\/ / _ \\/ ___/ __/
 / /_/ / /  / /_/ / /_/ /___/ /  __/ /  __/ /__/ /_  
/_____/_/   \\__,_/\\__, //____/\\___/_/\\___/\\___/\\__/  
               /____/                              

 ******************************************
 
 {*} {*} STAR THIS PLUGIN ON GITHUB {*} {*}

 https://github.com/ThibaultJanBeyer/DragSelect
 Please give it a like, this is what makes me happy :-)
 Thank You

 {*} {*} STAR THIS PLUGIN ON GITHUB {*} {*}

 ******************************************
 ********* The MIT License (MIT) **********
 ******************************************
 Created 2017 by ThibaultJanBeyer
 web: http://www.DragSelect.com/
 github: https://github.com/ThibaultJanBeyer/DragSelect

*/`

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/DragSelect.ts',
  output: [
    {
      file: 'dist/DragSelect.es6m.js',
      format: 'es',
      name: 'DragSelect',
      banner,
    },
    {
      file: 'dist/DragSelect.js',
      format: 'umd',
      name: 'DragSelect',
      banner,
    },
    {
      file: 'dist/ds.es6m.min.js',
      format: 'es',
      name: 'DragSelect',
      compact: true,
      plugins: [terser()],
    },
    {
      file: 'dist/ds.min.js',
      format: 'umd',
      name: 'DragSelect',
      compact: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript(),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
  ],
}
