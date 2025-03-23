import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  splitting: false,
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