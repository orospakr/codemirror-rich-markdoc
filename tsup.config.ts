import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    '@codemirror/view',
    '@codemirror/state',
    '@codemirror/language',
    '@codemirror/lang-markdown',
    '@lezer/highlight',
    '@lezer/markdown',
    '@markdoc/markdoc'
  ]
}); 