import { defineConfig } from 'tsup'

// Consumers bundle these helpers (noExternal), so this build only needs to be
// importable: ESM, CommonJS and declarations, nothing minified.
export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2020',
  treeshake: true,
})
