import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';
import glsl from 'vite-plugin-glsl';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: { '~': path.resolve(__dirname, 'app') },
  },
  server: { port: 7777 },

  // ⚠️ assetsInclude NOT needed for glsl
  assetsInclude: ['**/*.glb', '**/*.hdr'],

  build: { assetsInlineLimit: 1024 },

  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
    }),
    jsconfigPaths(),
    glsl({
      include: [
        '**/*.glsl',
        '**/*.vert',
        '**/*.frag',
        '**/*.glsl?raw'
      ],
    }),
  ],
});
