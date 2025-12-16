import { defineConfig } from 'vite';
import { remix } from '@remix-run/dev';
import glsl from 'vite-plugin-glsl';
import path from 'path';

export default defineConfig({
  plugins: [
    remix(),
    glsl({
      include: ['**/*.glsl', '**/*.vert', '**/*.frag']
    })
  ],
  assetsInclude: ['**/*.glsl', '**/*.vert', '**/*.frag'],
  resolve: {
    alias: {
      '~': path.resolve('./app')
    }
  }
});
