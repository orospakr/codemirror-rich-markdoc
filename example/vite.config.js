import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    dedupe: [
      '@codemirror/state',
      '@codemirror/view',
      '@codemirror/language',
      '@codemirror/lang-markdown',
      // You might add other @codemirror/* packages if the error persists
      // and points to other potential duplicates, but start with these core ones.
    ]
  }
}); 