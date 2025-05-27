import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  entry: ['src/index.ts', 'src/registry/index.ts'],
  sourcemap: true,
})
