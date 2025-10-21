import { defineConfig } from "vite";
import viteHtmlMinifierPlugin from "vite-plugin-html-minifier";
import vituumPlugin from "vituum";
import vituumTwigPlugin from "@vituum/vite-plugin-twig";

const src = "src/";

const config = defineConfig({
  build: {
    modulePreload: false,
    outDir: "build",
    rollupOptions: {
      input: [
        `${src}twig/pages/*.twig`,
        `${src}less/init.less`,
        `${src}js/init.js`,
      ],
    },
  },

  plugins: [
    viteHtmlMinifierPlugin({
      minify: true,
    }),
    vituumPlugin({
      pages: {
        dir: `${src}twig/pages`,
        root: `${src}twig`,
      },
    }),
    vituumTwigPlugin({
      root: `${src}twig`,
    }),
  ],

  server: {
    open: true,
    port: 1337,
  },
});

export default config;
